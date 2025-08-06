import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-braille-lite',
  templateUrl: './braille-lite.component.html',
  styleUrls: ['./braille-lite.component.scss'],
})
export class BrailleLiteComponent  implements OnInit {

  show: number;
  
    tag: any;
    elementTemp: string;
    element: string;
    category: string;
  
    constructor(private title: Title) {
  
      title.setTitle('Braille Lite');
      
      this.category='all';
     }
  
    ngOnInit() {
    }
  
    showOpt(opt: number){
  
      this.show = 0;
      switch (opt){
        case 1:
          this.element = "braille_1";
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