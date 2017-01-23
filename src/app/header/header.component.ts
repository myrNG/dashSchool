import { Component, OnInit } from '@angular/core';
import { User } from "../models/user";
import { Router } from "@angular/router";
import { AuthentificationService } from "../services/authentification.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  currentUser: User;

  constructor(private auth: AuthentificationService, private router: Router) { }

  ngOnInit() {
    let userStored = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUser = new User(userStored.id, userStored.login, userStored.firstname, userStored.lastname);
  }
  
  disconnectMe() {
    console.log('Déconnexion en cours...');
    this.auth.logOut();
    this.router.navigate(['/login']);
  }

}
