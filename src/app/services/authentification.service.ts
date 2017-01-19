import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthentificationService {
	
	constructor(private http: Http) {}
	
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
