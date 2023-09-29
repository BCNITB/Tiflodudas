import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-assistant',
  templateUrl: './v-assistant.component.html',
  styleUrls: ['./v-assistant.component.scss'],
})
export class VAssistantComponent  implements OnInit {

  show: number;

  tag: any;
  elementTemp: string;
  element: string;
  category:string;

  constructor() {
    this.category = 'all';
   }

  ngOnInit() {
  }

  showOpt(opt: number){

    this.show = 0;
    switch (opt){
      case 1:
        this.element = "va_1";
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