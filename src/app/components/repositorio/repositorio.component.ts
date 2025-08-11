import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.scss'],
})
export class RepositorioComponent  implements OnInit {

  category: string;
    
  constructor(private title: Title) {
      
      title.setTitle('Repositorio');
      
      this.category='all';
  }

  ngOnInit() {
  }


  selection(e:string){
    this.category=e;
  }
}