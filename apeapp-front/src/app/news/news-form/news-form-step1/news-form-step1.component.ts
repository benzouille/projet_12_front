import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {NewFormService} from '../new-form.service';
import {NewsParam} from '../../model/NewsParam';

/**
 * Form with stepper : stepper1 configuration of the new actuality.
 */
@Component({
  selector: 'app-news-form-step1',
  templateUrl: './news-form-step1.component.html',
  styleUrls: ['./news-form-step1.component.css']
})
export class NewsFormStep1Component implements OnInit {

  form = this.fb.group({
      category: ['', Validators.required],
      onDateEvent: [false],
      eventAt: [new Date(), Validators.required],
      onSite: [true],
      onMail: [false],
      onFacebook: [false],
    }
  );

  newsCategories;
  mediumTypes;
  selectedMediumNames: [string];
  onDateEvent;

  newsParam: NewsParam;

  constructor(private fb: FormBuilder, private newFormService: NewFormService) { }

  ngOnInit(): void {

    this.newsCategories = [
      {code: 'ACTUALITE', description: 'Actualité'},
      {code: 'INFORMATION', description: 'Information'},
      {code: 'MANIFESTATION', description: 'Manifestation'}
    ];

    this.mediumTypes = [
      {name: 'Site', value: 'SITE'},
      {name: 'E-mail', value: 'MAIL'},
      {name: 'Facebook', value: 'FACEBOOK'},
    ];

    this.form.valueChanges
      .subscribe(val => {
        const dateEventControl = this.form.controls.eventAt;

        if (val.onDateEvent === false && dateEventControl.enabled){
          dateEventControl.disabled;
          this.onDateEvent === false;
        }
        else if (val.onDateEvent === true && dateEventControl.disabled){
          dateEventControl.enabled;
          this.onDateEvent === true;
        }
      });
  }

  saveNewsParam(): void {
    this.newsParam = {
      category: this.form.value.category,
      eventAt: this.form.value.eventAt,
      mediumTypes: [''],
      onDateEvent: this.form.value.onDateEvent,
      onFacebook: this.form.value.onFacebook,
      onMail: this.form.value.onMail,
      onSite: this.form.value.onSite
    };
    this.newFormService.setSubjectNewsParam(this.newsParam);
  }

  get category(): AbstractControl {
    return this.form.controls.category;
  }

}
