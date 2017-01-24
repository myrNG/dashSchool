import {Component, OnInit} from '@angular/core';
import {User} from "../models/user";
import {Student} from "../models/student";
import {AuthentificationService} from "../services/authentification.service";
import {Router} from "@angular/router";
import {ListingService} from "../services/listing.service";
import {VueListingComponent} from "./vue-listing/vue-listing.component";
import {CustomSearchComponent} from "./custom-search/custom-search.component";

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass'],
  providers: [ListingService]
})
export class HomeComponent implements OnInit {
	currentUser: User;

	constructor() {
	}

	ngOnInit() {
		let userStored = JSON.parse(localStorage.getItem('currentUser'));
		this.currentUser = new User(userStored.id, userStored.login, userStored.firstname, userStored.lastname);
		console.log('Accès Home détecté avec user -> ', this.currentUser);
	}



}


