import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-google-as',
  templateUrl: './google-as.component.html',
  styleUrls: ['./google-as.component.scss'],
})
export class GoogleAsComponent  implements OnInit {

  show: number;

  tag: any;
  elementTemp: string;
  element: string;
  category: string;

  constructor(private title: Title) {
    
    title.setTitle('Google Assistant');
    
    this.category = 'all';
  }

  ngOnInit() {
  }

  showOpt(opt: number){

    this.show = 0;
    switch (opt){
      case 1:
        this.element = "gAss_1";
        this.show = 1;
        break;
      case 2:
        this.element = "gAss_2";
        this.show = 2;
        break;
      case 3:
        this.element = "gAss_3";
        this.show = 3;
        break;
      case 4:
        this.element = "gAss_4";
        this.show = 4;
        break;
      case 5:
        this.element = "gAss_5";
        this.show = 5;
        break;
      /*case 6:
        this.element = "gAss_6";
        this.show = 6;
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