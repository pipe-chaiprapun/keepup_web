import { Component, OnInit } from '@angular/core';
declare const $;

@Component({
  selector: 'app-serum',
  templateUrl: './serum.component.html',
  styleUrls: ['./serum.component.scss']
})
export class SerumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('.lightbox').topbox();
    });
  }

}
