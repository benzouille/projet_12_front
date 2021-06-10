import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { MainPageComponent } from './navigation/main-page/main-page.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { PageNotFoundComponent } from './navigation/page-not-found/page-not-found.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { BureauComponent } from './asso/bureau/bureau.component';
import {AppRoutingModule} from './app-routing.module';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import { HelpUsComponent } from './asso/help-us/help-us.component';
import { ComiteComponent } from './asso/comite/comite.component';
import { PresentationComponent } from './asso/presentation/presentation.component';
import { AdhererComponent } from './asso/adherer/adherer.component';
import {NewsModule} from './news/news.module';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainPageComponent,
    NavbarComponent,
    PageNotFoundComponent,
    SidenavComponent,
    BureauComponent,
    HelpUsComponent,
    ComiteComponent,
    PresentationComponent,
    AdhererComponent
  ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        MatRadioModule,
        KeycloakAngularModule,
        NewsModule,
    ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'test-keycloak',
        clientId: 'test-keycloak-front'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
    });
}
