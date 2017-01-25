import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

@Injectable()
export class DeletingStudentService {
	deletingURL: string = 'http://www.raphaeldirago.com/dashSchool/api/web/student/delete/'
	
	constructor( private http: Http ) {
	}
	
	deleteStudent( id: number ) {
		return this.http.get( this.deletingURL + id )
			.map( (response: Response) => {
				let resp = response.json();
				console.log('server response', resp);
			})
		
	}
}
