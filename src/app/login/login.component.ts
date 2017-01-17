import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthentificationService} from "../services/authentification.service";
import {User} from "../models/user";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.sass'],
	providers: [AuthentificationService]
})
export class LoginComponent implements OnInit {
	
	constructor(private auth: AuthentificationService) {
	}
	
	ngOnInit() {
	}
	
	/**
	 * On envoie les données récupérées dans les champs pour identification
	 * @param f = form
	 */
	onSubmit(f: NgForm): void {
		f.valid ? console.log(`Login : ${f.value.login}, Mot de passe : ${f.value.password}`) : false;
	}
	
	/**
	 * Vérifie au moment du submit si les deux champs sont remplis
	 * @param f = form
	 * @returns {boolean}
	 */
	isValid(f: NgForm): boolean {
		return f.submitted && !f.valid
	}
	
}
