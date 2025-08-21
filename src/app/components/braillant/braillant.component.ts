import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-braillant',
  templateUrl: './braillant.component.html',
  styleUrls: ['./braillant.component.scss'],
})
export class BraillantComponent  implements OnInit {

  category: string;

  constructor(private title: Title) {

    title.setTitle('Braillant');
    
    this.category='all';
   }

  ngOnInit() {
  }

  selection(e:string){
    this.category=e;
  }
}