import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthentificationService} from "../services/authentification.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.sass'],
	providers: [AuthentificationService]
})
export class LoginComponent implements OnInit {
	returnUrl: string;
	
	constructor(private auth: AuthentificationService) {
	}
	
	ngOnInit() {
		// this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}
	
	/**
	 * On envoie les données récupérées dans les champs pour identification
	 * @param f = form
	 */
	onSubmit(f: NgForm) {
		if (f.valid) {
			this.auth.logIn(f.value.login, f.value.password)
				.subscribe(
					data => {
						// this.router.navigate([this.returnUrl]);
						console.log("Auth OK", data)
					},
					error => {
						console.log("erreur d'authentification", error)
					});
		} else
			return false
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
