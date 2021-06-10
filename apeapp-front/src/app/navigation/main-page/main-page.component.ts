// @ts-ignore
// @ts-ignore

import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {catchError, finalize} from 'rxjs/operators';
import {of, pipe} from 'rxjs';
import {HttpClient, HttpEventType} from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  public imgpathLogo = 'assets/img/main_logo.png';
  public imgpathBackgroundLogo = 'assets/img/main_background_logo.jpg';
  public imgpathSubtitle = 'assets/img/title/dernieres_actualites.png';
  public imgAltSubtitle = 'titre dernieres actualites';
  public imgpathSlog = 'assets/img/slog.png';

  h1 = 'Bienvenue sur le site de l\'APE\n';

  presentation: string = 'L\'APE est une association de parents d\'élèves bénévoles qui s\'investit pour les enfants du regroupement scolaire de la Magnascole et des Crayons Magiques de Koenigsmacker. Ce regroupement englobe les communes d\'Oudrenne, Hunting, Malling, Kerling et Koenigsmacker.\n' +
    'L\'APE organise de nombreuses manifestations afin de récolter des fonds destinés à soutenir les activités des enfants, et cela dans un but non lucratif.';

  emailPattern = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';

  form = this.fb.group({
    email: ['', {
      validators: [
        Validators.required,
        // Validators.email,
        Validators.pattern(this.emailPattern),
      ],
    }],
  });

  ngOnInit(): void {
  }

  submit(form): void {
    console.log(form.value);

    if (form.value != null) {
      const email = form.value;
      console.log(email);
      this.http.post('http://localhost:9601/addMailAdress', email, {
        observe: 'events'
      })
        .pipe(
          catchError(error => {
            return of(error);
          }),
          finalize(() => {
          })
        )
        .subscribe(urlInfo => {
          if (urlInfo.type === HttpEventType.Response) {
              console.log(urlInfo);
          }
        });
    }
  }
}
