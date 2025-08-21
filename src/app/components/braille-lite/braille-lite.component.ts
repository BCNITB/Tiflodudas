import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-braille-lite',
  templateUrl: './braille-lite.component.html',
  styleUrls: ['./braille-lite.component.scss'],
})
export class BrailleLiteComponent  implements OnInit {

  category: string;
  
    constructor(private title: Title) {
  
      title.setTitle('Braille Lite');
      
      this.category='all';
     }
  
    ngOnInit() {
    }
  
    selection(e:string){
      this.category=e;
    }
  }