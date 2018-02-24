import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) { 
      console.log("Data Service connected!");
  }
  
  getSensorData() {
      return this.http.get('http://thesis-mitikubw.c9users.io/api')
      .map(res => res.json());
  }

}
