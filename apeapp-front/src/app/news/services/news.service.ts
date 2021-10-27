import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommunicationModel} from '../model/CommunicationModel';
import {shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {NewsFormObject} from '../model/NewsFormObject';

/**
 * Service reaching the micro-service news of the back-end
 */
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  // constructor(private http: HttpClient, private securityService: KeycloakSecurityService) { }

  /**
   * return list of news with site is the medium
   */
  public getNewsCommunicationsForSite(){
    return this.http.get('http://localhost:9101/CommunicationsForSite');
  }

  /**
   * return list of news with site is the medium and the 3 lastest
   */
  public getNewsCommunicationsForMainPage(){
    return this.http.get('http://localhost:9101/CommunicationsForMainPage');
  }

  public getCommunicationByUrl(url: string) {
    return this.http.get<CommunicationModel>(`http://localhost:9101/Communications/${url}`)
      .pipe(
        shareReplay()
      );
  }

  /**
   * return a communication by it's id
   * @param id of communication
   */
  public getCommunicationById(id: string): Observable<any> {
    return this.http.get<CommunicationModel>(`http://localhost:9101/Communications/${id}`)
      .pipe(
        shareReplay()
      );
  }

  public postNewsCommunication(newsFormObject: NewsFormObject): Observable<any> {
    console.log(newsFormObject.title);
    return this.http.post<any>('http://localhost:9101/AddNews', newsFormObject);
  }

  /**
   * Return all medium type
   */
  public getMediums(): Observable<any> {
    return this.http.get('http://localhost:9101/Mediums');
  }

  /**
   * return a file image
   */
  public getImageFile(titleImg: string): Observable<Blob> {

    return this.http.get('http://localhost:9101/files/' + titleImg, {responseType: 'blob'});

  }

  /**
   * download image on back-end
   */
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



