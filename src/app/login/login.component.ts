import {Component, OnInit, Input} from '@angular/core';
import {NgForm, FormControlDirective, FormControl} from '@angular/forms';
import {AuthentificationService} from "../services/authentification.service";
import {Router, ActivatedRoute, Route} from "@angular/router";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
	returnUrl: string;
	formControl: FormControl;
	
	constructor(private auth: AuthentificationService, private router: Router, private route: ActivatedRoute) {
	}
	
	ngOnInit() {
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
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
						console.log("Authentification OK");
						this.router.navigate([this.returnUrl]);
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
	 * @param e = input
	 * @returns {boolean}
	 */
	isEmpty(f: NgForm, e: FormControlDirective): boolean {
		return f.submitted && e.viewModel.length < 1
	}
	
}
