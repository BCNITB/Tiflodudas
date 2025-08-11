import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.scss'],
})
export class DispositivosComponent  implements OnInit {

  category: string;
  
    constructor(private title: Title) {
      
      title.setTitle('Dispositivos');
      
      this.category='all';
    }
  
    ngOnInit() {
    }
  
  
    selection(e:string){
      this.category=e;
    }
  }