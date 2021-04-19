import { Component, OnInit } from '@angular/core';
declare const $;
@Component({
  selector: 'app-contact-line2',
  templateUrl: './contact-line2.component.html',
  styleUrls: ['./contact-line2.component.scss']
})
export class ContactLine2Component implements OnInit {
  contactBtn = '../../../assets/images/contact/btn1.png';
  constructor() { }

  ngOnInit(): void {
    $('.img-contact.btn').hover(() => {
      this.contactBtn = '../../../assets/images/contact/btn2.png';
    }, () => { this.contactBtn = '../../../assets/images/contact/btn1.png'; });
  }

}
