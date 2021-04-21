import { Component, OnInit } from '@angular/core';
declare const $;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contactBtn = '../../../assets/images/contact/btn1.png';
  contactBtn2 = '../../../assets/images/contact/btn3.png';
  bannerBtn1 = '../../../assets/images/home/banner/btn1.png';
  bannerBtn2 = '../../../assets/images/home/banner/btn1.png';
  bannerBtn3 = '../../../assets/images/home/banner/btn1.png';
  bannerBtn4 = '../../../assets/images/home/banner/btn1.png';
  examBtn = '../../../assets/images/home/banner/btn3.png';
  examBtn2 = '../../../assets/images/home/brand/btn1.jpg'; 
  priceBtn1 = '../../../assets/images/home/marketing/price1.png';
  priceBtn2 = '../../../assets/images/home/marketing/price2.png';
  priceBtn3 = '../../../assets/images/home/marketing/price3.png';

  why1 = '../../../assets/images/home/imgWhy1.png';
  why2 = '../../../assets/images/home/imgWhy2.png';
  why3 = '../../../assets/images/home/imgWhy3.png';
  why4 = '../../../assets/images/home/imgWhy4.png';
  constructor() { }
  ngOnInit() {
    this.jqueryInitLoader();
  }
  jqueryInitLoader() {
    $('.carousel').carousel({ interval: 3000 });
    $('.img-contact.btn').hover(() => {
      this.contactBtn = '../../../assets/images/contact/btn2.png';
    }, () => { this.contactBtn = '../../../assets/images/contact/btn1.png'; });
    $('#contact-line').hover(() => {
      this.contactBtn2 = '../../../assets/images/contact/btn4.png';
    }, () => { this.contactBtn2 = '../../../assets/images/contact/btn3.png'; });
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
    $('#btn-exam').hover(() => {
      this.examBtn = '../../../assets/images/home/banner/btn4.png';
    }, () => { this.examBtn = '../../../assets/images/home/banner/btn3.png'; });
    $('#btn-exam2').hover(() => {
      this.examBtn2 = '../../../assets/images/home/brand/btn2.jpg';
    }, () => { this.examBtn2 = '../../../assets/images/home/brand/btn1.jpg'; });
    $('#price-btn1').hover(() => {
      this.priceBtn1 = '../../../assets/images/home/marketing/price4.png';
    }, () => { this.priceBtn1 = '../../../assets/images/home/marketing/price1.png'; });
    $('#price-btn2').hover(() => {
      this.priceBtn2 = '../../../assets/images/home/marketing/price4.png';
    }, () => { this.priceBtn2 = '../../../assets/images/home/marketing/price2.png'; });
    $('#price-btn3').hover(() => {
      this.priceBtn3 = '../../../assets/images/home/marketing/price4.png';
    }, () => { this.priceBtn3 = '../../../assets/images/home/marketing/price3.png'; });

    $('#why1').hover(() => {
      this.why1 = '../../../assets/images/home/imgWhy12.png';
    }, () => { this.why1 = '../../../assets/images/home/imgWhy1.png'; });
    $('#why2').hover(() => {
      this.why2 = '../../../assets/images/home/imgWhy22.png';
    }, () => { this.why2 = '../../../assets/images/home/imgWhy2.png'; });
    $('#why3').hover(() => {
      this.why3 = '../../../assets/images/home/imgWhy32.png';
    }, () => { this.why3 = '../../../assets/images/home/imgWhy3.png'; });
    $('#why4').hover(() => {
      this.why4 = '../../../assets/images/home/imgWhy42.png';
    }, () => { this.why4 = '../../../assets/images/home/imgWhy4.png'; });
  }
}
