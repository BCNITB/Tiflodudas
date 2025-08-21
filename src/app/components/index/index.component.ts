import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent  implements OnInit {

  category: string;

  constructor(private title: Title) {
    
    title.setTitle('Index Everest-D V5');
    
    this.category='all';
  }

  ngOnInit() {
  }

  selection(e:string){
    this.category=e;
  }
}