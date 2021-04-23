import { Component, OnInit } from '@angular/core';
declare const $;

@Component({
  selector: 'app-lip',
  templateUrl: './lip.component.html',
  styleUrls: ['./lip.component.scss']
})
export class LipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('.lightbox').topbox();
    });
  }

}
