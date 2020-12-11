import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router, UrlSegment} from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let routes:UrlSegment[] = this.route.snapshot.url;

    let fixRoutes: string = '';
    routes.forEach((item:UrlSegment,index: number) => {
      if (index > 0) {  //  skip random string on index 0
        fixRoutes = fixRoutes  + '/' + item.path
      }
    })

    let params:Params = this.route.snapshot.queryParams;

    this.router.navigate([fixRoutes],{queryParams: params});
  }

}
