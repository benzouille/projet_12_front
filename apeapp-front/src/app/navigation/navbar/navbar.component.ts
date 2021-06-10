import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {KeycloakProfile} from 'keycloak-js';
import {KeycloakService} from 'keycloak-angular';
import {LinkName} from '../data/LinkName';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output()
  public sidenavToggle = new EventEmitter();

  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;
  public linkName = LinkName;

  constructor(public keycloak: KeycloakService) { }

  public async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
    }
  }

  onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  onLogout = () => {
    this.keycloak.logout();
  }

  onProfile = () => {
    this.keycloak.loadUserProfile();
  }

  onLogin = () => {
    this.keycloak.login();
  }

  onRegister = () => {
    this.keycloak.register();
  }

}
