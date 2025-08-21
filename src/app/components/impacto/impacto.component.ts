import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-impacto',
  templateUrl: './impacto.component.html',
  styleUrls: ['./impacto.component.scss'],
})
export class ImpactoComponent  implements OnInit {

  category: string;

  constructor(private title: Title) {
    
    title.setTitle('Impacto');
    
    this.category = 'all';
  }

  ngOnInit() {
  }

  selection(e:string){
    this.category=e;
  }
}