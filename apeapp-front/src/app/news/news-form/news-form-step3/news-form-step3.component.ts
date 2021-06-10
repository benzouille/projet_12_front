import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {NewFormService} from '../new-form.service';
import {NewsService} from '../../services/news.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-news-form-step3',
  templateUrl: './news-form-step3.component.html',
  styleUrls: ['./news-form-step3.component.css']
})
export class NewsFormStep3Component implements OnInit, OnDestroy {

  subscription: Subscription;

  subscriptionForTitre: Subscription;

  form = this.fb.group({


  });

  titre: string;

  form1;

  form2;

  constructor(private fb: FormBuilder,
              private newFormService: NewFormService,
              private newsService: NewsService,
              private sanitizer: DomSanitizer) {

    this.subscriptionForTitre = this.newFormService.getTitre().subscribe(val => {
      this.titre = val;
      console.log('le titre : ' + this.titre);
    });
  }

  ngOnInit(): void {

    const draft = localStorage.getItem('STEP_2');

    if (draft) {
      console.log(JSON.parse(draft));
    }

    this.subscriptionForTitre = this.newFormService.getTitre().subscribe(val => {
      this.titre = val;
      console.log('le titre : ' + val.value);
    });
  }

  ngOnDestroy(): void {
  }

}
