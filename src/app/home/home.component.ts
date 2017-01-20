import {Component, OnInit} from '@angular/core';
import {User} from "../models/user";
import {Student} from "../models/student";
import {AuthentificationService} from "../services/authentification.service";
import {Router} from "@angular/router";

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
	currentUser: User;

	constructor(private auth: AuthentificationService, private router: Router) {
	}

	ngOnInit() {
		let userStored = JSON.parse(sessionStorage.getItem('currentUser'));
		this.currentUser = new User(userStored.id, userStored.login, userStored.firstname, userStored.lastname);
		console.log('Accès Home détecté avec user -> ', this.currentUser);
	}

	disconnectMe() {
		console.log('Déconnexion en cours...');
		this.auth.logOut();
		this.router.navigate(['/login']);
	}



}


