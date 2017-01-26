import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

@Injectable()
export class EditingStudentService {
	editingURL: string = 'http://www.raphaeldirago.com/dashSchool/api/web/student/update/';
	isUpdated: boolean;
	
	constructor( private http: Http ) {
	}
	
	updateStudent( id: number, values, skills: number[] ) {
		return this.http.post( this.editingURL + id, JSON.stringify({
			firstname: values.firstname,
			lastname: values.lastname,
			birthDate: values.birthDate,
			address: values.address,
			phone: values.phone,
			email: values.email,
			emergencyContact: values.emergencyContact,
			github: values.github,
			linkedin: values.linkedin,
			personalProject: values.personalProject,
			skills: skills
		}) )
			.map( ( response: Response ) => {
				let resp = response.json();
				console.log('server response', resp);
				if (resp.response == "student update") {
					this.isUpdated = true;
				} else
					this.isUpdated = false;
			} )
	}
}
