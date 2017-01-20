import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

import {Observable} from "rxjs";

import {Student} from "../models/student";


@Injectable()
export class ListingService {
  private listingUrl: string = 'https://jsonplaceholder.typicode.com/users';

  students: Observable<Student[]>;

  constructor(private http: Http) {
  }

  getListing() {
    console.log('Getting Listing');
    return this.http.get(this.listingUrl)
      .map((res: Response) => <Student[]> res.json())
      .catch(this.handleError);

  }

  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}

// Interface ou Class ?
/*export interface Student {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string;
      lng: string
    }
  };
  phone: string;
  website: string;
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  };
}
*/
