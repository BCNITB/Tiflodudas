import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cti',
  templateUrl: './cti.component.html',
  styleUrls: ['./cti.component.scss'],
})
export class CtiComponent  implements OnInit {

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
        this.element = "cti_1";
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