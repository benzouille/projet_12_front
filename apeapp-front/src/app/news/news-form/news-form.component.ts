import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {NewFormService} from './new-form.service';
import {NewsFormObject} from '../model/NewsFormObject';
import {NewsService} from '../services/news.service';

/**
 * Form with stepper use by admin to create new actuality.
 */
@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
    }
  ]
})
export class NewsFormComponent implements OnInit {

  title: string;
  longDescription: string;
  thumbnail: string;

  category: string;
  onDateEvent: boolean;
  eventAt?: Date;
  onSite: boolean;
  onMail: boolean;
  onFacebook: boolean;
  mediumTypes: [string];

  newsFormObject: NewsFormObject;

  constructor(private newFormService: NewFormService, private newsService: NewsService) { }

  ngOnInit(): void {

    this.newFormService.getSubjectDataNewsForm()
      .subscribe(newsData => {
          this.title = newsData?.title;
          this.longDescription = newsData?.longDescription;
        }
      );

    this.newFormService.getSubjectThumbnail()
      .subscribe( thumbnail => this.thumbnail = thumbnail);

    this.newFormService.getSubjectNewsParam()
      .subscribe(newsParam => {
          this.category = newsParam.category;
          this.onDateEvent = newsParam.onDateEvent;
          this.eventAt = newsParam.eventAt;
          this.onSite = newsParam.onSite;
          this.onMail = newsParam.onMail;
          this.onFacebook = newsParam.onFacebook;
          this.mediumTypes = newsParam.mediumTypes;
        }
      );
  }

  submit(): void {

    console.log('submit here');

    const mediumNames: string[] = [];
    if (this.onMail === true){
      mediumNames.push('MAIL');
    }
    if (this.onSite === true){
      mediumNames.push('SITE');
    }

    this.newsFormObject = {
      typeCom: this.category,
      onDateEvent: this.onDateEvent,
      date: this.eventAt,
      mediumNames,
      body: this.longDescription,
      imagePath: this.thumbnail,
      title: this.title,
      author: null
    };

    this.newsService.postNewsCommunication(this.newsFormObject).subscribe();

  }
}
