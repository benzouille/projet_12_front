import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {NewFormService} from '../new-form.service';
import {NewsData} from '../../model/NewsData';

/**
 * Form with stepper : stepper2 title, body and image of the new actuality.
 */
@Component({
  selector: 'app-news-form-step2',
  templateUrl: './news-form-step2.component.html',
  styleUrls: ['./news-form-step2.component.css']
})
export class NewsFormStep2Component implements OnInit {

  form = this.fb.group({
    title: ['', {
      validators: [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(60),
      ],
    }],
    longDescription: ['', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3000),
      ],
    }],
  });

  newsData: NewsData;

  constructor(private fb: FormBuilder, private newFormService: NewFormService) {}

  ngOnInit(): void {}

  saveDataNewsForm(): void {
    this.newsData = {title: this.form.value.title, longDescription: this.form.value.longDescription};
    this.newFormService.setSubjectDataNewsForm(this.newsData);
  }

  get title(): AbstractControl {
    return this.form.controls.title;
  }

  get description(): AbstractControl {
    return this.form.controls.longDescription;
  }

}
