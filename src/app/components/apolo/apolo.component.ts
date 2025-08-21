import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-apolo',
  templateUrl: './apolo.component.html',
  styleUrls: ['./apolo.component.scss'],
})
export class ApoloComponent  implements OnInit {

  show: number;

  category: string;

  constructor(private title: Title) {
    
    title.setTitle('Apolo ONCE');
    this.category = 'all';
  }

  ngOnInit() {
  }

  selection(e:string){
    this.category=e;
  }
}