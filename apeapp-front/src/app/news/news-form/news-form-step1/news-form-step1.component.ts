import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-news-form-step1',
  templateUrl: './news-form-step1.component.html',
  styleUrls: ['./news-form-step1.component.css']
})
export class NewsFormStep1Component implements OnInit {

  form = this.fb.group({
      category: ['Manifestation', Validators.required],
      onDateEvent: [false],
      eventAt: [new Date(), Validators.required],
      onSite: [false],
      onMail: [false],
      onFacebook: [false],
    }
  );

  newsCategories;
  mediumTypes;
  mediumTypesCount;
  selectedMediumNames: [string];

  onDateEvent;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    // TODO a remplacer par appel micro service
    this.newsCategories = [
      {code: '1', description: 'Actualité'},
      {code: '2', description: 'Information'},
      {code: '3', description: 'Manifestation'}
    ];

    this.mediumTypes = [
      {name: 'Site', value: 'site'},
      {name: 'E-mail', value: 'email'},
      {name: 'Facebook', value: 'facebook'},
    ];

    this.mediumTypesCount = 0;


    this.form.valueChanges
      .subscribe(val => {
        const dateEventControl = this.form.controls["eventAt"];

        if (val.onDateEvent === false && dateEventControl.enabled){
          dateEventControl.disabled;
          this.onDateEvent === false;
        }
        else if (val.onDateEvent === true && dateEventControl.disabled){
          dateEventControl.enabled;
          this.onDateEvent === true;
        }
      })
  }

  // createMedium(hobbiesInputs) {
  //   const arr = hobbiesInputs.map(hobby => {
  //     return new FormControl(hobby.selected || false);
  //   });
  //   return new FormArray(arr);
  // }
  //
  // getSelectedHobbies() {
  //   this.selectedHobbiesNames = _.map(
  //     this.personForm.controls.hobbies["controls"],
  //     (hobby, i) => {
  //       return hobby.value && this.myhobbies[i].value;
  //     }
  //   );
  //   this.getSelectedHobbiesName();
  // }
  //
  // getSelectedHobbiesName() {
  //   this.selectedMediumNames = _.filter(
  //     this.selectedMediumNames,
  //     function(hobby) {
  //       if (hobby !== false) {
  //         return hobby;
  //       }
  //     }
  //   );
  // }

  get category(){
    return this.form.controls['category'];
  }

}
