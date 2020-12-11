import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-initiator',
  templateUrl: './initiator.component.html',
  styleUrls: ['./initiator.component.scss']
})
export class InitiatorComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    let token = this.route.snapshot.queryParams.token;
    this.appService.setToken(token);
    this.router.navigate(["/dashboard"]);
  }

}
