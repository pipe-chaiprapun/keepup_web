import { Component, OnInit } from '@angular/core';
declare const $;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contactBtn = '../../../assets/images/contact/btn1.png';
  bannerBtn1 = '../../../assets/images/home/banner/btn1.png';
  bannerBtn2 = '../../../assets/images/home/banner/btn1.png';
  bannerBtn3 = '../../../assets/images/home/banner/btn1.png';
  bannerBtn4 = '../../../assets/images/home/banner/btn1.png';
  constructor() { }

  ngOnInit() {
    $('.carousel').carousel({ interval: 3000 });
    $('.img-contact').hover(() => {
      this.contactBtn = '../../../assets/images/contact/btn2.png';
    }, () => { this.contactBtn = '../../../assets/images/contact/btn1.png'; });
    $('#banner-btn1').hover(() => {
      this.bannerBtn1 = '../../../assets/images/home/banner/btn2.png';
    }, () => { this.bannerBtn1 = '../../../assets/images/home/banner/btn1.png'; });
    $('#banner-btn2').hover(() => {
      this.bannerBtn2 = '../../../assets/images/home/banner/btn2.png';
    }, () => { this.bannerBtn2 = '../../../assets/images/home/banner/btn1.png'; });
    $('#banner-btn3').hover(() => {
      this.bannerBtn3 = '../../../assets/images/home/banner/btn2.png';
    }, () => { this.bannerBtn3 = '../../../assets/images/home/banner/btn1.png'; });
    $('#banner-btn4').hover(() => {
      this.bannerBtn4 = '../../../assets/images/home/banner/btn2.png';
    }, () => { this.bannerBtn4 = '../../../assets/images/home/banner/btn1.png'; });
  }

}
