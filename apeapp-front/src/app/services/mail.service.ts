import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  public unSubscribeNewsLetter(encodedId: string): Observable<string> {
    console.log(encodedId);
    return this.http.post<string>('http://localhost:9601/delMailAdress', encodedId);
  }

}
