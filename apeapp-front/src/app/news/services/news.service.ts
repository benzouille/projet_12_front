import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommunicationModel} from '../model/CommunicationModel';
import {shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  // constructor(private http: HttpClient, private securityService: KeycloakSecurityService) { }

  public getNewsCommunicationsForSite(){
    return this.http.get('http://localhost:9101/CommunicationsForSite');
  }

  public getNewsCommunicationsForMainPage(){
    return this.http.get('http://localhost:9101/CommunicationsForMainPage');
  }

  public getCommunicationByUrl(url: string) {
    return this.http.get<CommunicationModel>(`http://localhost:9101/Communications/${url}`)
      .pipe(
        shareReplay()
      );
  }

  public getCommunicationById(id: string) {
    return this.http.get<CommunicationModel>(`http://localhost:9101/Communications/${id}`)
      .pipe(
        shareReplay()
      );
  }

  public getMediums() {
    return this.http.get('http://localhost:9101/Mediums');
  }

  public getImageFile(titleImg: string): Observable<Blob> {

    return this.http.get('http://localhost:9101/files/' + titleImg, {responseType: 'blob'});

  }

  public uploadFile(file: File) {

    // TODO verifier le format .jpg ou .png
    const fileName = file.name;
    console.log('uploadFile : ' + file.name);

    const formData = new FormData();

    formData.append('file', file);
    console.log('uploadFile : ' + formData.get('file').toString());

    this.http.post('http://localhost:9101/files/upload', formData)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}



