import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-jaws',
  templateUrl: './jaws.component.html',
  styleUrls: ['./jaws.component.scss'],
})
export class JawsComponent  implements OnInit {

  category: string;

  constructor(private title: Title) {
    title.setTitle('JAWS');
   }

  ngOnInit() {
    this.category="all";
  }

  selection(e:string){
    this.category=e;
  }
}