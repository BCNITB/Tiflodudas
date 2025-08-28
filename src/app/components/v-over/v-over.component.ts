import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-v-over',
  templateUrl: './v-over.component.html',
  styleUrls: ['./v-over.component.scss'],
})
export class VOverComponent  implements OnInit {

  category: string;

  constructor(private title: Title) {
    
    title.setTitle('VoiceOver');
    this.category = 'all';
  }

  ngOnInit() {
  }

  selection(e:string){
    this.category=e;
  }
}