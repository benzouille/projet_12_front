import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-unsuscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit {

  public encodedId: string;

  constructor(private activatedRoute: ActivatedRoute, ) {

  }

  ngOnInit(): void {
    this.encodedId = this.activatedRoute.snapshot.paramMap.get('encodedId');



    console.log(this.encodedId);
  }

}
