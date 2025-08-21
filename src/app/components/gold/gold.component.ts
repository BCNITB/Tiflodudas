import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.scss'],
})
export class GoldComponent  implements OnInit {

  show: number;

  category: string;

  constructor(private title: Title) {
    
    title.setTitle('Gestor ONCE de Libros Digitales');
    
    this.category = 'all';
  }

  ngOnInit() {
  }

  selection(e:string){
    this.category=e;
  }
}