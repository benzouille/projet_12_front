import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {NewFormService} from '../new-form.service';

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
        Validators.maxLength(1000),
      ],
    }],
    thumbnail: [''],
  });

  constructor(private fb: FormBuilder, private newFormService: NewFormService) {
  }

  secondes: number;

  ngOnInit(): void {

    // const draft = localStorage.getItem('STEP_2');
    //
    // if (draft) {
    //   this.form.setValue(JSON.parse(draft));
    // }
    //
    // // this.form.valueChanges
    // //   .pipe(
    // //     filter(() => this.form.valid)
    // //   )
    // //   .subscribe( val => localStorage.setItem("STEP_2", JSON.stringify(val)));

    this.form.valueChanges
      .pipe(first())
      // .filter(() => this.form.valid)
      .subscribe( val => localStorage.setItem('STEP_2', JSON.stringify(val)));
  }

  // TODO take until destroy

  get title(){
    return this.form.controls['title'];
  }

  get description(){
    return this.form.controls['longDescription'];
  }

}
