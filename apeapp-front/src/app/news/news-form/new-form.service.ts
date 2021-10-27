import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {NewsData} from '../model/NewsData';
import {NewsParam} from '../model/NewsParam';

@Injectable({
  providedIn: 'root'
})
export class NewFormService {

  behaviorSubjectStep1: BehaviorSubject<NewsParam>;
  observableStep1$: Observable<NewsParam>;

  behaviorSubjectForm: BehaviorSubject<NewsData>;
  observableForm$: Observable<NewsData>;

  behaviorSubjectThumbnail: BehaviorSubject<string>;
  observableThumbnail$: Observable<string>;

  constructor() {
    this.behaviorSubjectStep1 = new BehaviorSubject<NewsParam>({
      category: null,
      onDateEvent: false,
      eventAt: null,
      onSite: false,
      onMail: false,
      onFacebook: false,
      mediumTypes: null,
    });
    this.observableStep1$ = this.behaviorSubjectStep1.asObservable();

    this.behaviorSubjectForm = new BehaviorSubject<NewsData>({
      title: null,
      longDescription: null,
    });
    this.observableForm$ = this.behaviorSubjectForm.asObservable();

    this.behaviorSubjectThumbnail = new BehaviorSubject<string>('');
    this.observableThumbnail$ = this.behaviorSubjectThumbnail.asObservable();
  }


  setSubjectNewsParam(newsParam: NewsParam): void {
    console.log(newsParam);
    this.behaviorSubjectStep1.next(newsParam);
  }

  getSubjectNewsParam(): Observable<NewsParam> {
    return this.observableStep1$;
  }

  setSubjectDataNewsForm(newsData: NewsData): void {
    this.behaviorSubjectForm.next(newsData);
  }

  getSubjectDataNewsForm(): Observable<NewsData> {
    return this.observableForm$;
  }

  setSubjectThumbnail(thumbnail: string): void {
    this.behaviorSubjectThumbnail.next(thumbnail);
  }

  getSubjectThumbnail(): Observable<string> {
    return this.observableThumbnail$;
  }
}
