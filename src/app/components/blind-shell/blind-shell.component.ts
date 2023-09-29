import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blind-shell',
  templateUrl: './blind-shell.component.html',
  styleUrls: ['./blind-shell.component.scss'],
})
export class BlindShellComponent  implements OnInit {

  show: number;

  tag: any;
  elementTemp: string;
  element: string;
  category: string;

  constructor() { 
    this.category = 'all';
  }

  ngOnInit() {
  }

  showOpt(opt: number){

    this.show = 0;
    switch (opt){
      case 1:
        this.element = "bs_1";
        this.show = 1;
        break;
      case 2:
        this.element = "bs_2";
        this.show = 2;
        break;
      case 3:
        this.element = "bs_3";
        this.show = 3;
        break;
      case 4:
        this.element = "bs_4";
        this.show = 4;
        break;
      case 5:
        this.element = "bs_5";
        this.show = 5;
        break;
      case 6:
          this.element = "bs_6";
          this.show = 6;
          break;
        case 7:
          this.element = "bs_7";
          this.show = 7;
          break;
        case 8:
          this.element = "bs_8";
          this.show = 8;
          break;
        case 9:
          this.element = "bs_9";
          this.show = 9;
          break;
        case 10:
          this.element = "bs_10";
          this.show = 10;
          break;
        case 11:
          this.element = "bs_11";
          this.show = 11;
          break;
        case 12:
          this.element = "bs_12";
          this.show = 12;
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