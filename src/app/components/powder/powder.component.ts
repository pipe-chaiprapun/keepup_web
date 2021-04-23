import { Component, OnInit } from '@angular/core';
declare const $;

@Component({
  selector: 'app-powder',
  templateUrl: './powder.component.html',
  styleUrls: ['./powder.component.scss']
})
export class PowderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('.lightbox').topbox();
    });
  }

}
