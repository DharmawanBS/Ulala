import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import FileSaver from "file-saver";
import {Location} from "@angular/common";

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(private appService: AppService,
              private location: Location) { }

  ngOnInit() {
    this.downloadPdf();
  }

  downloadPdf() {
    alert(this.appService.getToken());
    this.appService.getFile().subscribe(result => {
      let byte = result.output_schema.pdf_bytes;

      let binary = atob(byte.replace(/\s/g, ''));
      let length = binary.length;
      let view = new Uint8Array(new ArrayBuffer(length));
      for (let i = 0; i < length; i++) {
        view[i] = binary.charCodeAt(i);
      }

      let file = new Blob([view], {type: "application/pdf"});
      FileSaver.saveAs(file, "ulala-creator.pdf");
      this.location.back()
    });
  }
}
