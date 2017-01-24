import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Request, RequestMethod} from "@angular/http";
import 'rxjs/add/operator/map';

import {Observable} from "rxjs";

import {Student} from "../models/student";

@Injectable()
export class CustomSearhcService {
  private listingUrl: string = 'http://raphaeldirago.com/dashSchool/api/web/listing';

  students: Observable<Student[]>;

  constructor(private http:Http) { }

  getListing(){
    return this.http.get(this.listingUrl)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }
  // message error
  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}
