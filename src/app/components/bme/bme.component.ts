import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bme',
  templateUrl: './bme.component.html',
  styleUrls: ['./bme.component.scss'],
})
export class BmeComponent  implements OnInit {

  category: string;

  constructor(private title: Title) {
    title.setTitle('Braille Music Editor');
    this.category = 'all';
   }

  ngOnInit() {}

  selection(e:string){
    this.category=e;
  }
}
