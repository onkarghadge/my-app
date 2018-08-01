import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as Rx from 'rxjs/Rx';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
let templateUrl = 'http://localhost:10010/template/v1/Template';


@Injectable({
  providedIn: 'root'
})
export class TemplateService {


  constructor(private http: HttpClient) { }

  postData(data) {
    let postObject = data;
    JSON.stringify(postObject);
    return this.http.post(templateUrl, postObject);
  }

  getData() {
  debugger
    return this.http.get(templateUrl);
  }

  deleteRecord(_id){
    return this.http.delete(templateUrl + '/' + _id);
  }

  updateRecord(_id, _obj){
    return this.http.put(templateUrl + '/' + _id, _obj);
  }

}
