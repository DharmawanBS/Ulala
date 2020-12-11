import {Component, OnInit} from '@angular/core';
import {AppService} from "../app.service";
import FileSaver from "file-saver";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = 'ulala';
  tokenAppli2: string = "";
  tokenAppli2Real: string = "";

  constructor(private appService: AppService,
              private router: Router) {
  }

  temp() {
    return this.tokenAppli2Real + (this.tokenAppli2.replace(new RegExp('/*', 'g'), ""));
  }

  ngOnInit() {
  }

  downloadPdfNew() {
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
    });
  }

  downloadPdfOld() {
    alert(this.appService.getToken());
    this.appService.getFile().subscribe(result => {
      let byte = result.output_schema.pdf_bytes;

      const downloadLink = document.createElement("a");
      downloadLink.href = `data:application/pdf;base64,${byte}`;
      downloadLink.download = "ulala-creator.pdf";
      downloadLink.click();
    });
  }

  openPdf() {
    alert(this.appService.getToken());
    this.appService.getFile().subscribe(result => {
      let byte = result.output_schema.pdf_bytes;

      let binary = atob(byte.replace(/\s/g, ''));
      let length = binary.length;
      let view = new Uint8Array(new ArrayBuffer(length));
      for (let i = 0; i < length; i++) {
        view[i] = binary.charCodeAt(i);
      }
      const blobFile = new Blob([view], {type: 'application/pdf'});
      const fileURL = URL.createObjectURL(blobFile);
      window.open(fileURL, '_blank');
    });
  }

  onlyNumber(event: KeyboardEvent) {
    let ascii = event.charCode;
    return (ascii >= 48 && ascii <= 57);
  }
}
