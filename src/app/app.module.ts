import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from "./guards/auth-guard";
import { AuthentificationService } from "./services/authentification.service";
import { ListingService } from "./services/listing.service";
import { routing } from "./app.routing";
import { FirstLetterUppercasePipe } from "./pipes/first-letter-uppercase.pipe";
import { VueListingComponent } from './home/vue-listing/vue-listing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddStudentComponent } from './home/add-student/add-student.component';

@NgModule( {
	declarations: [
		AppComponent,
		LoginComponent,
		HomeComponent,
		FirstLetterUppercasePipe,
		VueListingComponent,
		HeaderComponent,
		FooterComponent,
		AddStudentComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		routing,
		ReactiveFormsModule
	],
	providers: [
		AuthGuard,
		AuthentificationService,
		ListingService
	
	],
	bootstrap: [ AppComponent ]
} )
export class AppModule {
}
