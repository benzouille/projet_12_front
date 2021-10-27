import { Component, OnInit } from '@angular/core';

/**
 * Footer witch contain small presentation, util link.
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  presentation = 'Site de l\'association des parents d\'élèves du groupement scolaire des communes de Koenigsmacker, Malling,\n' +
    ' Hunting, Oudrenne, Karling.';

  ecoleImgPath = '../../../assets/img/ecole_min.png';
  logoImgPath = '../../../assets/img/g13530.png';

  links: any = [
    {title : 'Mairie de Hunting',
      path : 'https://www.mairie-hunting.fr/accueil/accueil2.php',
    },
    {title: 'Mairie de Kerling',
      path: 'https://www.mairiekerling.fr/',
    },
    {title : 'Mairie de Koenigsmacker',
      path : 'https://www.mairie-koenigsmacker.fr/index.php/fr/',
    },
    {title : 'Mairie de Malling',
      path : 'https://www.malling.fr/',
    },
    {title : 'Mairie d\'Oudrenne',
      path : 'http://www.mairie-oudrenne.fr/',
    },
    {title : 'La restauration scolaire',
      path : 'https://www.mairie-koenigsmacker.fr/index.php/fr/cadre-de-vie/education-jeunesse/restauration-scolaire',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
