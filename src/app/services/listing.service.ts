import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Request, RequestMethod} from "@angular/http";
import 'rxjs/add/operator/map';

import {Observable} from "rxjs";

import {Student} from "../models/student";


@Injectable()
export class ListingService {
  //private listingUrl: string = 'https://jsonplaceholder.typicode.com/users';
  private listingUrl: string = 'http://raphaeldirago.com/dashSchool/api/web/listing';
  private studentUrl: string = 'http://raphaeldirago.com/dashSchool/api/web/listing/detailStudent/';

  students: Observable<Student[]>;
  student: Observable<Student []>;

  constructor(private http: Http) {
  }


  getListing(){
     return this.http.get(this.listingUrl) // rajouter interpo de id
            .map((res: Response) => <Student[]> res.json())
            .catch(this.handleError);
   }
  getStudent(id:number){
    return this.http.get(this.studentUrl+id)// rajouter interpo de id
      .map((res: Response) => <Student[]> res.json() )
      .catch(this.handleError);
  }



  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
  addStudent(){ }

  editStudent(){ }

  deleteStudent(){}
}


