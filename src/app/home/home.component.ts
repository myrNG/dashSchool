import {Component, OnInit} from '@angular/core';
import {User} from "../models/user";
import {AuthentificationService} from "../services/authentification.service";

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
	currentUser: User;

	constructor(private auth: AuthentificationService) {
	}

	ngOnInit() {
		let userStored = JSON.parse(localStorage.getItem('currentUser'));
		this.currentUser = new User(userStored.id, userStored.login, userStored.firstname, userStored.lastname);
		console.log('Accès Home détecté avec user -> ', this.currentUser);
	}
	
	
}


