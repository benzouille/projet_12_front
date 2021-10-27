import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MailService} from '../../services/mail.service';

/**
 * here is the linked page of unsubscribe button on newsletters
 */
@Component({
  selector: 'app-unsuscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit {

  public encodedId: string;
  public _mailService: MailService;

  constructor(private activatedRoute: ActivatedRoute, mailService: MailService) {
    this._mailService = mailService;

  }

  ngOnInit(): void {
    this.encodedId = this.activatedRoute.snapshot.paramMap.get('encodedId');
    this._mailService.unSubscribeNewsLetter(this.encodedId).subscribe();
    console.log('pass here');
  }

}
