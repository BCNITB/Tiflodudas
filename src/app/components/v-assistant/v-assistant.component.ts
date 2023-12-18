import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

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

  constructor(private title: Title) {

    title.setTitle('VoiceAssistant');
    
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