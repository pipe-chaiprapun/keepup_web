import { Component, OnInit } from '@angular/core';
declare const $;
@Component({
  selector: 'app-jar',
  templateUrl: './jar.component.html',
  styleUrls: ['./jar.component.scss']
})
export class JarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('.lightbox').topbox();
    });
  }

}
