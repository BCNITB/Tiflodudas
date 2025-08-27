import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-omni-page',
  templateUrl: './omni-page.component.html',
  styleUrls: ['./omni-page.component.scss'],
})
export class OmniPageComponent  implements OnInit {

  category: string;

  constructor(private title: Title) {
    
    title.setTitle('OmniPage');
    
    this.category = 'all';
  }

  ngOnInit() {
  }

  selection(e:string){
    this.category=e;
  }
}