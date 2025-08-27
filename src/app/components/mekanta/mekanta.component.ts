import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mekanta',
  templateUrl: './mekanta.component.html',
  styleUrls: ['./mekanta.component.scss'],
})
export class MekantaComponent  implements OnInit {

  category: string;

  constructor(private title: Title) {
    
    title.setTitle('Mekanta');
    
    this.category = 'all';
  }

  ngOnInit() {
  }

  selection(e:string){
    this.category=e;
  }
}