import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-amp-ios',
  templateUrl: './amp-ios.component.html',
  styleUrls: ['./amp-ios.component.scss'],
})
export class AmpIosComponent  implements OnInit {

  show: number;

  category: string;

  constructor(private title: Title) {
    
    title.setTitle('Magnificación iOS');
    
    this.category='all';
  }

  ngOnInit() {
  }

  selection(e:string){
    this.category=e;
  }
}