import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bme',
  templateUrl: './bme.component.html',
  styleUrls: ['./bme.component.scss'],
})
export class BmeComponent  implements OnInit {

  show: number;

  tag: any;
  elementTemp: string;
  element: string;
  category: string;

  constructor(private title: Title) {
    title.setTitle('Braille Music Editor');
    this.category = 'all';
   }

  ngOnInit() {}

  showOpt(opt: number){

    this.show = 0;
    switch (opt){
      case 1:
        this.element = "bme_1";
        this.show = 1;
        break;
    }

    this.elementTemp = this.element;

    this.tag = document.getElementById(this.element);
    this.tag.ariaHidden="false";
  }

  selection(e:string){
    this.category=e;
  }
}
