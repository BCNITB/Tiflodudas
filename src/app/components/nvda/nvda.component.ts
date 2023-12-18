import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nvda',
  templateUrl: './nvda.component.html',
  styleUrls: ['./nvda.component.scss'],
})
export class NvdaComponent  implements OnInit {

  show: number;

  tag: any;
  elementTemp: string;
  element: string;
  category: string;

  constructor(private title: Title) {
    
    title.setTitle('Non-Visual Desktop Access (NVDA)');
    
    this.category = 'all';
  }

  ngOnInit() {
  }

  showOpt(opt: number){

    this.show = 0;
    switch (opt){
      case 1:
        this.element = "nvda_1";
        this.show = 1;
        break;
      case 2:
        this.element = "nvda_2";
        this.show = 2;
        break;
      case 3:
      this.element = "nvda_3";
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