import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service';

/**
 * Page of the overall seen news
 */
@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  public news: any;
  public errorMessage: any;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNewsCommunicationsForSite()
      .subscribe(data => {
          this.news = data; }
        , err => {
          this.errorMessage =  err.error.message;
        });
  }


  onClickDetail(id) {}
}
