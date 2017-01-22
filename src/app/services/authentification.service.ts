import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthentificationService {
	isAuthentificated:boolean;

	constructor(private http: Http) {}

	logIn(login: string, password: string) {
		console.log("tentative d'authentification");
		return this.http.post('http://raphaeldirago.com/dashSchool/api/web/login', JSON.stringify({
			login: login,
			password: password
		}))
			.map((response: Response) => {
				let user = response.json();
				console.log('server response', user);
				if (!user.responseServer) {
					this.isAuthentificated = true;
					localStorage.setItem('currentUser', JSON.stringify(user));
				} else
					this.isAuthentificated = false;

			});
	}

	logOut() {
		localStorage.removeItem('currentUser');
	}
}
