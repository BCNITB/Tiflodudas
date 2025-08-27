import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-v-assistant',
  templateUrl: './v-assistant.component.html',
  styleUrls: ['./v-assistant.component.scss'],
})
export class VAssistantComponent  implements OnInit {

  category:string;

  constructor(private title: Title) {

    title.setTitle('VoiceAssistant');
    
    this.category = 'all';
   }

  ngOnInit() {
  }

  selection(e:string){
    this.category=e;
  }
}