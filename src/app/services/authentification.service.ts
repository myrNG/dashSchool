import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthentificationService {
<<<<<<< HEAD
	
	constructor(private http: Http) {}
	
=======

	constructor(private http: Http) {

	}

>>>>>>> 77a5f9531566746cda99cab510cca176e7df8f2e
	logIn(login: string, password: string) {
		console.log("tentative d'authentification");
		return this.http.post('http://dash-school.hol.es/api/web/login', JSON.stringify({
			login: login,
			password: password
		}))
			.map((response: Response) => {
				let user = response.json();
				console.log('server response', user);
				if (!user.responseServer) {
					sessionStorage.setItem('currentUser', JSON.stringify(user));
				}
			});
	}
	
	logOut() {
		sessionStorage.removeItem('currentUser');
	}
}
