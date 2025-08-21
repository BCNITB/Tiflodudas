import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-amp-linux',
  templateUrl: './amp-linux.component.html',
  styleUrls: ['./amp-linux.component.scss'],
})
export class AmpLinuxComponent  implements OnInit {

  show: number;
  
    category: string;
  
    constructor(private title: Title) {
      
      title.setTitle('Magnificación de Linux');
      
      this.category = 'all';
    }

  ngOnInit() {}

  selection(e:string){
    this.category=e;
  }
}