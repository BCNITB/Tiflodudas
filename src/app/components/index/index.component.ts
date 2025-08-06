import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent  implements OnInit {

  show: number;

  tag: any;
  elementTemp: string;
  element: string;
  category: string;

  constructor(private title: Title) {
    
    title.setTitle('Index Everest-D V5');
    
    this.category='all';
  }

  ngOnInit() {
  }

  showOpt(opt: number){

    this.show = 0;
    switch (opt){
      case 1:
        this.element = "index_1";
        this.show = 1;
        break;
      case 2:
      this.element = "index_2";
      this.show = 2;
      break;
    case 3:
      this.element = "index_3";
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