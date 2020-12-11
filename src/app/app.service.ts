import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _token: string;

  constructor(private http: HttpClient) { }

  getFile(): Observable<any> {
    return this.http.get<any>("/assets/json/file.json");
  }


  getToken(): string {
    return this._token;
  }

  setToken(value: string) {
    this._token = value;
  }
}
