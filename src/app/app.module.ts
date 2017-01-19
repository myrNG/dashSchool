import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

import {AuthGuard} from "./guards/auth-guard";
import {AuthentificationService} from "./services/authentification.service";
import {routing} from "./app.routing";
import {FirstLetterUppercasePipe} from "./pipes/first-letter-uppercase.pipe";

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		HomeComponent,
		FirstLetterUppercasePipe
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		routing
	],
	providers: [
		AuthGuard,
		AuthentificationService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}