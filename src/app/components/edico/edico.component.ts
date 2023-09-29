import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edico',
  templateUrl: './edico.component.html',
  styleUrls: ['./edico.component.scss'],
})
export class EdicoComponent  implements OnInit {

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
        this.element = "edico_1";
        this.show = 1;
        break;
      case 2:
        this.element = "edico_2";
        this.show = 2;
        break;
      case 3:
        this.element = "edico_3";
        this.show = 3;
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