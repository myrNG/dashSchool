import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Request, RequestMethod} from "@angular/http";
import 'rxjs/add/operator/map';

import {Observable} from "rxjs";

import {Student} from "../models/student";


@Injectable()
export class ListingService {
  //private listingUrl: string = 'https://jsonplaceholder.typicode.com/users';
  private listingUrl: string = 'http://raphaeldirago.com/dashSchool/api/web/listing';
  //private listingUrl: string = 'dash-school.hol.es/api/web/listing';
  //private studentUrl: string = 'dash-school.hol.es/api/web/listing/detailStudent';

  students: Observable<Student[]>;

  constructor(private http: Http) {
  }

  /*getListing() {
    console.log('Getting Listing');

    return this.http.get(this.listingUrl)
      .map((res: Response) => <Student[]> res.json())
      .catch(this.handleError);

  }
  */
  getListing(){
     // Permet de personnalister la requete avec l'id du student
     //const id = new RequestOptions({ method: RequestMethod.Get });
     return this.http.get(this.listingUrl) // rajouter interpo de id
            .map((res: Response) => <Student[]> res.json())
            .catch(this.handleError);
   }
  /*
  * getListing(){
  *   // Permet de personnalister la requete avec l'id du student
  *   const id = new RequestOptions({ method: RequestMethod.Get });
  *   return this.http.get(this.listingUrl, options) // rajouter interpo de id
  *     .map(res: Response) => <Student[]> res.json()
  *     .catch(this.handleError);
  * }
  *
  * getStudent(id:number){
  *   return this.http.get(`dash-school.hol.es/api/web/listing/detailStudent/${id}`)
  *     .map((res: Response) => <Student> res.json())
  *     .catch(this.handleError);
  * }
  * */


  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
  addStudent(){ }

  editStudent(){ }

  deleteStudent(){}
}


