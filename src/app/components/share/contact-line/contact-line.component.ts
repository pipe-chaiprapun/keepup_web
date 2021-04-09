import { Component, OnInit } from '@angular/core';
declare const $;

@Component({
  selector: 'app-contact-line',
  templateUrl: './contact-line.component.html',
  styleUrls: ['./contact-line.component.scss']
})
export class ContactLineComponent implements OnInit {
  contactBtn2 = '../../../assets/images/contact/btn3.png';
  constructor() { }

  ngOnInit(): void {
    $('#contact-line').hover(() => {
      this.contactBtn2 = '../../../assets/images/contact/btn4.png';
    }, () => { this.contactBtn2 = '../../../assets/images/contact/btn3.png'; });
  }

}
