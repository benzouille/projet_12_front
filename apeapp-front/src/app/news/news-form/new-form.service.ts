import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {AbstractControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NewFormService {

  private subject = new Subject<any>();

  constructor() { }


  sendTitre(titre: AbstractControl){
    this.subject.next({val : titre.value});
  }

  getTitre(): Observable<any>{
    console.log('le titre : ' + this.subject.next());
    return this.subject.asObservable();

  }
}
