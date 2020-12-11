import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InitiatorComponent} from "./initiator/initiator.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {DownloadComponent} from "./download/download.component";

const routes: Routes = [
  {path: '', redirectTo: '/init', pathMatch: 'full'},
  {path: 'init', component: InitiatorComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'download', component: DownloadComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
