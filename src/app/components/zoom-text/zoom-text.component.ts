import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-zoom-text',
  templateUrl: './zoom-text.component.html',
  styleUrls: ['./zoom-text.component.scss'],
})
export class ZoomTextComponent  implements OnInit {

  show: number;

  tag: any;
  elementTemp: string;
  element: string;
  category: string;

  constructor(private title: Title) {
    
    title.setTitle('ZoomText');
    
    this.category = 'all';
  }

  ngOnInit() {
  }

  showOpt(opt: number){

    this.show = 0;
    switch (opt){
      case 1:
        this.element = "zt_1";
        this.show = 1;
        break;
      case 2:
        this.element = "zt_2";
        this.show = 2;
        break;
      case 3:
      this.element = "zt_3";
      this.show = 3;
      break;
    case 4:
      this.element = "zt_4";
      this.show = 4;
      break;
    case 5:
      this.element = "zt_5";
      this.show = 5;
      break;
    case 6:
      this.element = "zt_6";
      this.show = 6;
      break;
    case 7:
      this.element = "zt_7";
      this.show = 7;
      break;
    case 8:
      this.element = "zt_8";
      this.show = 8;
      break;
    case 9:
      this.element = "zt_9";
      this.show = 9;
      break;
    case 10:
      this.element = "zt_10";
      this.show = 10;
      break;
    case 11:
      this.element = "zt_11";
      this.show = 11;
      break;
    case 12:
      this.element = "zt_12";
      this.show = 12;
      break;
    case 13:
    this.element = "zt_13";
    this.show = 13;
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