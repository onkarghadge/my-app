import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as Rx from 'rxjs/Rx';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

let templateUrl = 'http://localhost:10010/template/v1/Template';
let categoryUrl = 'http://localhost:10011/categoryData/v1/Categories';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {


  constructor(private http: HttpClient) { }

  // template methods ==>
  postData(data) {
    let postObject = data;
    JSON.stringify(postObject);
    return this.http.post(templateUrl, postObject);
  }

  getData() {
    debugger
    return this.http.get(templateUrl);
  }

  getTemplateDataById(_filter?) {
    debugger
    if (_filter) {
      let url = templateUrl + '?filter=' + _filter;
      return this.http.get(url);
    } else {
      return this.http.get(templateUrl);
    }
  }

  deleteRecord(_id) {
    return this.http.delete(templateUrl + '/' + _id);
  }

  updateRecord(_id, _obj) {
    return this.http.put(templateUrl + '/' + _id, _obj);
  }

  // Category_Data get method ==>
  getCatData(_filter?) {
    debugger
    if (_filter) {
      let url = categoryUrl + '?filter=' + _filter;
      return this.http.get(url);
    } else {
      return this.http.get(categoryUrl);
    }
  }

}
