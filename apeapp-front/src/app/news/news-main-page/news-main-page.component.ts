import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CommunicationModel} from '../model/CommunicationModel';
import {NewsService} from '../services/news.service';
import {map, shareReplay, tap} from 'rxjs/operators';

@Component({
  selector: 'app-news-main-page',
  templateUrl: './news-main-page.component.html',
  styleUrls: ['./news-main-page.component.css']
})
export class NewsMainPageComponent implements OnInit {

  mainComs$: Observable<CommunicationModel[]>;

  public news: any;
  public errorMessage: any;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {

    const comms$ = this.newsService.getNewsCommunicationsForMainPage();

    this.mainComs$ = comms$.pipe(
      tap(() => console.log('const mainComs$')),
      map(res => Object.values(res)),
    );
  }

}
