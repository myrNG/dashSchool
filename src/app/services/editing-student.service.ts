import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

@Injectable()
export class EditingStudentService {
	editingURL: string = 'http://www.raphaeldirago.com/dashSchool/api/web/student/update/';
	
	constructor( private http: Http ) {
	}
	
	updateStudent( id: number, values: Object ) {
		return this.http.post( this.editingURL + id, JSON.stringify( values ) )
			.map( ( response: Response ) => {
				let resp = response.json();
				console.log('server response', resp);
				
			} )
	}
}
