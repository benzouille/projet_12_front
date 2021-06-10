import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CommunicationModel} from '../model/CommunicationModel';
import {Observable} from 'rxjs';
import {NewsService} from './news.service';


@Injectable()
export class CommunicationResolver implements  Resolve<CommunicationModel>{

  constructor(private communications: NewsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommunicationModel> {

    const communicationId = route.paramMap.get('communicationId');

    console.log('communicationId : ' + communicationId);

    return this.communications.getCommunicationById(communicationId);
  }

}
