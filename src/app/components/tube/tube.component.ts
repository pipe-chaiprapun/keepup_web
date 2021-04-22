import { Component, OnInit } from '@angular/core';
declare const $;

@Component({
  selector: 'app-tube',
  templateUrl: './tube.component.html',
  styleUrls: ['./tube.component.scss']
})
export class TubeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('.lightbox').topbox();
    });
  }

}
