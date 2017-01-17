import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

	constructor() { }
	
	ngOnInit() {
	}
	
	/**
	 * On envoie les données récupérées dans les champs pour identification
	 * @param f = form
	 */
	onSubmit(f: NgForm): void {
		f.valid ? console.log(`Login : ${f.value.login}, Mot de passe : ${f.value.password}`) : false
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
