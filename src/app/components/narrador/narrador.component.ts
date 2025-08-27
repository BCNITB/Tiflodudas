import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-narrador',
  templateUrl: './narrador.component.html',
  styleUrls: ['./narrador.component.scss'],
})
export class NarradorComponent  implements OnInit {

  category: string;

  constructor(private title: Title) {
    title.setTitle('Narrador');
    this.category = 'all';
   }

  ngOnInit() {}

  selection(e:string){
    this.category=e;
  }
}
