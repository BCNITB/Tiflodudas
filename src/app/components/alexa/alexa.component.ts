import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-alexa',
  templateUrl: './alexa.component.html',
  styleUrls: ['./alexa.component.scss'],
})
export class AlexaComponent  implements OnInit {

  show: number;

  category: string;

  constructor(private title: Title) {
    
    title.setTitle('Alexa');
    
    this.category='all';
  }

  ngOnInit() {
  }

  selection(e:string){
    this.category=e;
  }
}