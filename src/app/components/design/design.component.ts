import { Component, OnInit } from '@angular/core';
declare const $;

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {
  btn1 = '../../../assets/images/design/price/btn1.png';
  btn2 = '../../../assets/images/design/price/btn1.png';
  btn3 = '../../../assets/images/design/price/btn1.png';
  btn4 = '../../../assets/images/design/price/btn1.png';
  constructor() { }

  ngOnInit() {
    $('#btn-design1').hover(() => {
      this.btn1 = '../../../assets/images/design/price/btn2.png';
    }, () => { this.btn1 = '../../../assets/images/design/price/btn1.png'; });
    $('#btn-design2').hover(() => {
      this.btn2 = '../../../assets/images/design/price/btn2.png';
    }, () => { this.btn2 = '../../../assets/images/design/price/btn1.png'; });
    $('#btn-design3').hover(() => {
      this.btn3 = '../../../assets/images/design/price/btn2.png';
    }, () => { this.btn3 = '../../../assets/images/design/price/btn1.png'; });
    $('#btn-design4').hover(() => {
      this.btn4 = '../../../assets/images/design/price/btn2.png';
    }, () => { this.btn4 = '../../../assets/images/design/price/btn1.png'; });
  }

}
