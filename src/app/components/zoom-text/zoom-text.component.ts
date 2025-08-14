import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-zoom-text',
  templateUrl: './zoom-text.component.html',
  styleUrls: ['./zoom-text.component.scss'],
})
export class ZoomTextComponent  implements OnInit {

  //tag: any;
  //elementTemp: string;
  //element: string;
  category: string;

  constructor(private title: Title) {
    
    title.setTitle('ZoomText');
    
    this.category = 'all';
  }

  ngOnInit() {
  }

  selection(e:string){
    this.category=e;
  }
}