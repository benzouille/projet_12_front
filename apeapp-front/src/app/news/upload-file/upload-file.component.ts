import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {NewsService} from '../services/news.service';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {catchError, finalize} from 'rxjs/operators';
import {of} from 'rxjs';
import {NewFormService} from '../news-form/new-form.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: UploadFileComponent
    }
  ]
})
export class UploadFileComponent implements OnInit, ControlValueAccessor {

  fileName = '';

  fileUploadError = false;

  fileUploadSuccess = false;

  disabled = false;

  uploadProgress: number;

  onChange = (fileName: string) => {};

  onTouched = () => {};

  constructor(private http: HttpClient, private newsService: NewsService, private newFormService: NewFormService) { }

  ngOnInit(): void {
  }



  onClick(fileUpload: HTMLInputElement): void {
    this.onTouched();
    fileUpload.click();
  }

  onFileSelected(event): void {

    console.log('onFileSelected : ' + event.target.files[0].name);

    const file: File = event.target.files[0];

    if (file){

      this.fileName = file.name;

      const formData = new FormData();

      formData.append('thumbnail', file);

      this.fileUploadError = false;

      this.http.post('http://localhost:9101/files/upload', formData, {
        reportProgress: true,
        observe: 'events'
      })
        .pipe(
          catchError(error => {
            this.fileUploadError = true;
            return of(error);
          }),
          finalize(() => {
            this.uploadProgress = null;
          })
        )
        .subscribe(urlInfo => {
          if (urlInfo.type === HttpEventType.UploadProgress) {
            this.uploadProgress = Math.round(100 * (urlInfo.loaded / urlInfo.total));
          }
          if (urlInfo.type === HttpEventType.Response) {
            this.onChange(this.fileName);
          }
        });
    }

    this.newsService.uploadFile(file);
    this.newFormService.setSubjectThumbnail(this.fileName);

  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  writeValue(value: any): void {
    this.fileName = value;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

}
