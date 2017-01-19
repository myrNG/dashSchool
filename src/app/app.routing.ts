import {Routes, RouterModule} from "@angular/router";
// Components
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
// Guards
import {AuthGuard} from "./guards/auth-guard";

const routes: Routes = [
	{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
	{ path: 'login', component: LoginComponent },
	
	// On redirige automatiquement les petits curieux :)
	{ path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);