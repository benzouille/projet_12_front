import { Component, OnInit } from '@angular/core';

/**
 * Adherer component not use for now implemented in further version
 * Provide an acces in api to pay annual cotisation
 */
@Component({
  selector: 'app-adherer',
  templateUrl: './adherer.component.html',
  styleUrls: ['./adherer.component.css']
})
export class AdhererComponent implements OnInit {

  public title = 'adherer';

  public imgpath = 'assets/img/title/' + this.title + '.png';

  constructor() { }

  ngOnInit(): void {
  }

}
