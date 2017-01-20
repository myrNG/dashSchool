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
		this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
	}

	ngOnInit() {
		console.log('home detected -> ', this.currentUser)
	}

	disconnectMe() {
		console.log('Deconnexion en cours...');
		this.auth.logOut();
		this.router.navigate(['/login']);
	}



}


