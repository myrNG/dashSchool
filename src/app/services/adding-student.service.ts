import { Injectable } from '@angular/core';
import { Response, Http } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class AddingStudentService {
	private addingUrl: string = 'http://raphaeldirago.com/dashSchool/api/web/student/add';
	
	constructor( private http: Http) {
	}
	
	addStudent( newUser ) {
		console.log( "tentative d'ajout de l'user -> ", newUser );
		console.log( "tentative d'ajout de l'user(JSON.stringify) -> ", JSON.stringify( { newUser } ) );
		return this.http.post( this.addingUrl, JSON.stringify( {
			gender: newUser.gender,
			firstname: newUser.firstname,
			lastname: newUser.lastname,
			birthdate: newUser.birthdate,
			address: newUser.address,
			phone: newUser.phone,
			email: newUser.email,
			emergencyContact: newUser.emergencyContact,
			github: newUser.github,
			linkedin: newUser.linkedin,
			personalProject: newUser.personalProject,
			photo: newUser.photo
		} ) )
			.map( ( response: Response ) => {
				let user = response.json();
				console.log( 'server response', user );
				//if (!user.responseServer) {
				//  this.isAuthentificated = true;
				//  localStorage.setItem('currentUser', JSON.stringify(user));
				//} else
				//  this.isAuthentificated = false;
				
			} );
	}
	
	handleError( error: Response ) {
		console.error( error );
		return Observable.throw( error.json().error || 'Server Error' );
	}
	
}
