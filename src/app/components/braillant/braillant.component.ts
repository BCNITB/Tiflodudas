import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-braillant',
  templateUrl: './braillant.component.html',
  styleUrls: ['./braillant.component.scss'],
})
export class BraillantComponent  implements OnInit {

  show: number;

  tag: any;
  elementTemp: string;
  element: string;
  category: string;

  constructor() {
    this.category='all';
   }

  ngOnInit() {
  }

  showOpt(opt: number){

    this.show = 0;
    switch (opt){
      case 1:
        this.element = "bra_1";
        this.show = 1;
        break;
      case 2:
        this.element = "bra_2";
        this.show = 2;
        break;
      case 3:
        this.element = "bra_3";
        this.show = 3;
        break;
      case 4:
        this.element = "bra_4";
        this.show = 4;
        break;
      case 5:
        this.element = "bra_5";
        this.show = 5;
        break;
      case 6:
        this.element = "bra_6";
        this.show = 6;
        break;
      case 7:
        this.element = "bra_7";
        this.show = 7;
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