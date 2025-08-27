import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-orbit',
  templateUrl: './orbit.component.html',
  styleUrls: ['./orbit.component.scss'],
})
export class OrbitComponent  implements OnInit {

  category: string;
  
  constructor(private title: Title) {
    
    title.setTitle('Orbite Reader');
    
    this.category="all";
  }

  ngOnInit() {
  }

  selection(e:string){
    this.category=e;
  }
}