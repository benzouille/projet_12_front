import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {KeycloakProfile} from 'keycloak-js';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output()
  private sidenavClose = new EventEmitter();

  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;

  constructor(public keycloak: KeycloakService) { }

  public async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
    }
  }

  public onSidenavClose() {
    this.sidenavClose.emit();
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
