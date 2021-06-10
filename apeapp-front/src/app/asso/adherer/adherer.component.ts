import { Component, OnInit } from '@angular/core';

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
