import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edico',
  templateUrl: './edico.component.html',
  styleUrls: ['./edico.component.scss'],
})
export class EdicoComponent  implements OnInit {

  category: string;

  constructor(private title: Title) {
    
    title.setTitle('Editor Científico ONCE');
    this.category = 'all';
  }

  ngOnInit() {
  }

  selection(e:string){
    this.category=e;
  }
}