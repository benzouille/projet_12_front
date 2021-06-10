import {RouterModule, Routes} from '@angular/router';
import {NewsListTabComponent} from './news-list-tab/news-list-tab.component';
import {NewsDetailComponent} from './news-detail/news-detail.component';
import {CommunicationResolver} from './services/communication.resolver';
import {NewsFormComponent} from './news-form/news-form.component';
import {NgModule} from '@angular/core';


const routes: Routes = [

  {
    path: '',
    component: NewsListTabComponent
  },
  {
    path: 'communication/:communicationId',
    component: NewsDetailComponent,
    resolve: {
      communication: CommunicationResolver
    }
  },
  {
    path: 'create',
    component: NewsFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    CommunicationResolver
  ]
})
export class NewsRoutingModule { }

