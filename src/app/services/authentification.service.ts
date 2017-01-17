import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class AuthentificationService {
	
	constructor(private http: Http) {
	}
	
	logIn(login: string, password: string) {
		return this.http.post('a-determiner/api/login', JSON.stringify({ login: login, password: password }))
			.map((response: Response) => {
				let user = response.json();
				if (user && user.token){
					localStorage.setItem('currentUser', JSON.stringify(user));
				}
			})
	}
	logOut() {
		localStorage.removeItem('currentUser');
	}
}
