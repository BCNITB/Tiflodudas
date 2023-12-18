import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-apolo',
  templateUrl: './apolo.component.html',
  styleUrls: ['./apolo.component.scss'],
})
export class ApoloComponent  implements OnInit {

  show: number;

  tag: any;
  elementTemp: string;
  element: string;
  category: string;

  constructor(private title: Title) {
    
    title.setTitle('Apolo ONCE');
    this.category = 'all';
  }

  ngOnInit() {
  }

  showOpt(opt: number){

    this.show = 0;
    switch (opt){
      case 1:
        this.element = "apolo_1";
        this.show = 1;
        break;
      /*case 2:
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
          break;*/
    }

    this.elementTemp = this.element;

    this.tag = document.getElementById(this.element);
    this.tag.ariaHidden="false";
  }

  selection(e:string){
    this.category=e;
  }
}