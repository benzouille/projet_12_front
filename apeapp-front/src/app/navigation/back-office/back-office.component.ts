import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {KeycloakProfile} from 'keycloak-js';
import {LinkName} from '../data/LinkName';

/**
 * Back office Component manage connection, adding news.
 */
@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.css']
})
export class BackOfficeComponent implements OnInit {

  @Output()
  public sidenavToggle = new EventEmitter();

  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;
  public linkName = LinkName;

  public subtitle1 = 'Administration';
  public paraph1 = 'Page réservé à l\'usage des administrateurs';

  constructor(public keycloak: KeycloakService) { }


  public async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
    }
  }

  onLogin = () => {
    this.keycloak.login();
  }

  onLogout = () => {
    this.keycloak.logout();
  }

}
