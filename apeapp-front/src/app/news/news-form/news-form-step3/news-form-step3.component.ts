import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {NewFormService} from '../new-form.service';
import {Observable} from 'rxjs';

/**
 * Form with stepper : stepper3 wyswyg of the new actuality and validate it.
 */
@Component({
  selector: 'app-news-form-step3',
  templateUrl: './news-form-step3.component.html',
  styleUrls: ['./news-form-step3.component.css']
})
export class NewsFormStep3Component implements OnInit, OnDestroy {

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

  constructor(private fb: FormBuilder, private newFormService: NewFormService) {
  }

  ngOnInit(): void {

    this.newFormService.getSubjectDataNewsForm()
      .subscribe(newsData => {
          this.title = newsData?.title;
          this.longDescription = newsData?.longDescription;
        }
      );

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

    this.newFormService.getSubjectThumbnail()
      .subscribe(thumbnail =>
        this.thumbnail = thumbnail
      );
  }

  ngOnDestroy(): void {
  }
}
