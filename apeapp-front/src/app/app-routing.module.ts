import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {BureauComponent} from './asso/bureau/bureau.component';
import {PageNotFoundComponent} from './navigation/page-not-found/page-not-found.component';
import {MainPageComponent} from './navigation/main-page/main-page.component';
import {HelpUsComponent} from './asso/help-us/help-us.component';
import {ComiteComponent} from './asso/comite/comite.component';
import {PresentationComponent} from './asso/presentation/presentation.component';
import {AdhererComponent} from './asso/adherer/adherer.component';
import {UnsubscribeComponent} from './navigation/unsubscribe/unsubscribe.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '', component: AppComponent },
  { path: 'accueil', component: MainPageComponent},
  { path: 'asso/presentation', component: PresentationComponent},
  { path: 'asso/comite', component: ComiteComponent},
  { path: 'asso/bureau', component: BureauComponent},
  { path: 'asso/help-us', component: HelpUsComponent},
  { path: 'asso/adherer', component: AdhererComponent},
  { path: 'unsubscribe/:encodedId', component: UnsubscribeComponent},

  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
