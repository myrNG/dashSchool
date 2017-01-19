import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
	
	constructor(private router: Router) { }
	
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		console.log('Vérification des acces Admin');
		if (sessionStorage.getItem('currentUser')) {
			// User peut accéder à la route si il est loggé
			console.log('Utilisateur reconnu -> accès à la home en cours...');
			return true;
		}
		
		// User non reconnu, redirigé vers le login
		console.log('Utilisateur non reconnu ou inexistant -> retour au login...');
		this.router.navigate(['/login']);
		return false;
	}
}