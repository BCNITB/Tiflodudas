import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ebrai',
  templateUrl: './ebrai.component.html',
  styleUrls: ['./ebrai.component.scss'],
})
export class EbraiComponent  implements OnInit {

  category: string;

  constructor(private title: Title) {

    title.setTitle('Editor Braille (EBrai))')
    this.category='all';
   }

  ngOnInit() {
  }

  selection(e:string){
    this.category=e;
  }
}