import { Component, OnInit } from '@angular/core';
declare const $;

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(window).scroll(function () {
      if ($(window).scrollTop() >= 450) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });

    $('#content').scroll(function () {
      if ($('#content').scrollTop() >= 450) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });

    $('.scroll-top').click(function () {
      $('html, body, #content').animate({ scrollTop: 0 }, 'slow');
    });
  }

}
