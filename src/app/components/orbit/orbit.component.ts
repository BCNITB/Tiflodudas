import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-orbit',
  templateUrl: './orbit.component.html',
  styleUrls: ['./orbit.component.scss'],
})
export class OrbitComponent  implements OnInit {

  show: number;

  tag: any;
  elementTemp: string;
  element: string;
  category: string;
  
  constructor(private title: Title) {
    
    title.setTitle('Orbite Reader');
    
    this.category="all";
  }

  ngOnInit() {
  }

  showOpt(opt: number){

    this.show = 0;
    switch (opt){
      case 1:
        this.element = "orb_1";
        this.show = 1;
        break;
      case 2:
        this.element = "orb_2";
        this.show = 2;
        break;
      case 3:
      this.element = "orb_3";
      this.show = 3;
      break;
    case 4:
      this.element = "orb_4";
      this.show = 4;
      break;
    case 5:
      this.element = "orb_5";
      this.show = 5;
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