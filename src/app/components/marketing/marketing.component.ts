import { Component, OnInit } from '@angular/core';
declare const $;

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {
  btn1 = '../../../assets/images/marketing/btn1.jpg';
  btn2 = '../../../assets/images/marketing/btn2.jpg';
  btn3 = '../../../assets/images/marketing/btn3.jpg';
  constructor() { }

  ngOnInit() {
    this.jqueryInitLoader();
  }

  jqueryInitLoader() {
    $('#package1').hover(() => {
      this.btn1 = '../../../assets/images/marketing/btn4.jpg';
    }, () => { this.btn1 = '../../../assets/images/marketing/btn1.jpg'; });
    $('#package2').hover(() => {
      this.btn2 = '../../../assets/images/marketing/btn4.jpg';
    }, () => { this.btn2 = '../../../assets/images/marketing/btn2.jpg'; });
    $('#package3').hover(() => {
      this.btn3 = '../../../assets/images/marketing/btn4.jpg';
    }, () => { this.btn3 = '../../../assets/images/marketing/btn2.jpg'; });
  }
}
