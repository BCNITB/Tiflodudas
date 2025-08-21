import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-alva',
  templateUrl: './alva.component.html',
  styleUrls: ['./alva.component.scss'],
})
export class AlvaComponent  implements OnInit {

  show: number;

  category: string;

  constructor(private title: Title) {
    
    title.setTitle('Línea Braille Alva');
    
    this.category='all';
  }

  ngOnInit() {
  }

  selection(e:string){
    this.category=e;
  }
}