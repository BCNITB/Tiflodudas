import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-aplicaciones',
  templateUrl: './aplicaciones.component.html',
  styleUrls: ['./aplicaciones.component.scss'],
})
export class AplicacionesComponent  implements OnInit {

  category: string;
  
    constructor(private title: Title) {
      
      title.setTitle('Aplicaciones');
      
      this.category='all';
    }
  
    ngOnInit() {
    }
  
  
    selection(e:string){
      this.category=e;
    }
  }