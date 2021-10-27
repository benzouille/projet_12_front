import { Component, OnInit } from '@angular/core';
import {Office} from './Office';

/**
 * page for explanation of the office members and what they do.
 */
@Component({
  selector: 'app-bureau',
  templateUrl: './bureau.component.html',
  styleUrls: ['./bureau.component.css']
})
export class BureauComponent implements OnInit {

  public title = 'office';

  public imgpath = 'assets/img/title/' + this.title + '.png';

  public paraph0 = 'Le nouveau Comité, élu le lors de l\'AG du 29 novembre 2019, se compose de 7 personnes au Office, ainsi que de nombreux assesseurs.';

  public subtitle1 = 'Composition du Bureau :';

  office = Office;
  description: any;

  constructor() { }

  ngOnInit(): void {
    this.description = '';
  }

}
