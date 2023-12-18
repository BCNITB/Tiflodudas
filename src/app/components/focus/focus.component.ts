import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.scss'],
})
export class FocusComponent  implements OnInit {

  show: number;

  tag: any;
  elementTemp: string;
  element: string;
  category: string;

  constructor(private title: Title) {
    
    title.setTitle('Línea Brille Focus');
    this.category = 'all';
  }

  ngOnInit() {
  }

  showOpt(opt: number){

    this.show = 0;
    switch (opt){
      case 1:
        this.element = "focus_1";
        this.show = 1;
        break;
      case 2:
        this.element = "focus_2";
        this.show = 2;
        break;
      case 3:
        this.element = "focus_3";
        this.show = 3;
        break;
      case 4:
        this.element = "focus_4";
        this.show = 4;
        break;
      case 5:
        this.element = "focus_5";
        this.show = 5;
        break;
      case 6:
        this.element = "focus_6";
        this.show = 6;
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