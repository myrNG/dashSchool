import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";

@Injectable()
export class DeletingStudentService {
	deletingURL: string = 'http://www.raphaeldirago.com/dashSchool/api/web/student/delete/'
	
	constructor( private http: Http ) {
	}
	
	deleteStudent( id: number ) {
		//let headers = new Headers({
		//	'Content-Type': 'application/json',
		//	'X-HTTP-Method-Override': "DELETE"
		//});
		//let options = new RequestOptions({ headers: headers });
		return this.http.get( this.deletingURL + id )
			.map( (response: Response) => {
				let resp = response.json();
				console.log('server response', resp);
			})
		
	}
}
