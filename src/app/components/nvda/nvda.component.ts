import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nvda',
  templateUrl: './nvda.component.html',
  styleUrls: ['./nvda.component.scss'],
})
export class NvdaComponent  implements OnInit {

  category: string;

  constructor(private title: Title) {
    
    title.setTitle('Non-Visual Desktop Access (NVDA)');
    
    this.category = 'all';
  }

  ngOnInit() {
  }

  selection(e:string){
    this.category=e;
  }
}