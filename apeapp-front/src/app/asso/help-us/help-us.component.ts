import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-us',
  templateUrl: './help-us.component.html',
  styleUrls: ['./help-us.component.css']
})
export class HelpUsComponent implements OnInit {

  public title = 'help-us';

  public imgpath = 'assets/img/title/' + this.title + '.png';

  public subtitle1 = 'L’adhésion à l’APE';
  public paraph1 = 'L’adhésion est volontaire et unique, quel que soit le nombre d’enfants que vous avez scolarisés sur l’ensemble scolaire Magnascole-Les crayons magiques. Son montant annuel s’élève à 10 €.\n' +
    '  L’adhésion vous permet de soutenir financièrement les actions de l’APE en devenant membre mais ne signifie pas que vous vous engagez à faire partie du Comité et donc à assister à ses réunions.\n' +
    '  L’APEL compte sur votre adhésion afin que toutes ses actions puissent être maintenues pour le bien-être de tous les élèves de la maternelle et du primaire.';


  public subtitle2 = 'L’élection au Bureau de l’APE';
  public paraph2 = 'L’APE ne vit et n’est représentative que grâce à la présence, à l’engagement et à l’action des parents bénévoles.\n' +
    '  Si vous êtes volontaire et disponible, rejoignez le Conseil d’Administration, véritable moteur de l’association, à l’occasion de l’Assemblée Générale organisée en début d’année scolaire.\n' +
    '  Les réunions ont généralement lieu le 1er mardi soir de chaque mois à partir de 19h, mais le calendrier est adapté en fonction des besoins.';


  public subtitle3 = 'L’aide ponctuelle';
  public paraph3 = 'L’APE sollicite ponctuellement l’aide de tous les parents sur certaines animations :\n' +
    '    tenue d’un stand lors de la Fête de l’école,\n' +
    '  réalisation de gateaux,\n' +
    '  réalisation d’un atelier ou tenue d\'un stand lors des différents évenements et fêtes, …\n' +
    '  N’hésitez pas à leur offrir un peu de votre temps, ce sont tous les enfants de l’établissement qui vous en seront reconnaissants !!!';


  constructor() { }

  ngOnInit(): void {
  }

}
