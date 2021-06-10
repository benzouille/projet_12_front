import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  public title = 'presentation';

  public imgpath = 'assets/img/title/' + this.title + '.png';

  public paraph0 = 'L\'Ape agit et s\'implique dans la vie des établissements scolaires. Elles ont la responsabilité de représenter les parents,\n' +
    ' au sein des établissements comme auprès des responsables de l\'Institution scolaire.';

  public subtitle1 = 'Son rôle :';
  public paraph1 = '  représentation des parents d\'élèves au sein de l\'établissement.\n' +
    '  lien entre les parents, les élèves et l\'administration des établissements scolaires.\n' +
    '  informations des parents et des élèves majeurs.';

  public subtitle2 = 'Ses services :';
  public paraph2 = 'échanges de services entre adhérents, entre élèves et parents d\'élèves\n' +
    '  aide aux projets des classes\n' +
    '  animation lors des Portes Ouvertes des écoles magnascole et les crayons magiques';

  constructor() { }

  ngOnInit(): void {
  }

}
