import { Component, OnInit } from '@angular/core';
declare const $;

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent implements OnInit {

  constructor() { }

  // navbar = document.getElementById('#navbar') as HTMLElement;
  // sticky;

  ngOnInit(): void {
    // this.sticky = this.navbar.offsetTop;

    // window.onscroll = function () { this.myFunction(); };

    $(window).scroll(function () {
      if ($(window).scrollTop() >= 450) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });
    $('.scroll-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
    // $('#content').scroll(function () {
    //   if ($('#content').scrollTop() >= 450) {
    //     $('.scroll-top').fadeIn();
    //   } else {
    //     $('.scroll-top').fadeOut();
    //   }
    // });

    // $('.scroll-top').click(function () {
    //   $('#content, html, body').animate({ scrollTop: 0 }, 'slow');
    // });
  }
  // myFunction() {
  //   if (window.pageYOffset >= this.sticky) {
  //     this.navbar.classList.add('sticky');
  //   } else {
  //     this.navbar.classList.remove('sticky');
  //   }
  // }
}
