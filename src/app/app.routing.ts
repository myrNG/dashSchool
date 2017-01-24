import {Routes, RouterModule} from "@angular/router";
// Components
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import { AddStudentComponent } from "./home/add-student/add-student.component";
// Guards
import {AuthGuard} from "./guards/auth-guard";
import { VueListingComponent } from "./home/vue-listing/vue-listing.component";

const routes: Routes = [
	{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
	{ path: 'login', component: LoginComponent },
	{ path: 'listing', component: VueListingComponent },
	{ path: 'add', component: AddStudentComponent },
	
	// On redirige automatiquement les petits curieux :)
	{ path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);