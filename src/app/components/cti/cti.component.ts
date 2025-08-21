import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cti',
  templateUrl: './cti.component.html',
  styleUrls: ['./cti.component.scss'],
})
export class CtiComponent  implements OnInit {

  category: string;

  constructor(private title: Title) { 
    title.setTitle('Centro Tegnología e Innovación');
    this.category = 'all';
  }

  ngOnInit() {
  }

  selection(e:string){
    this.category=e;
  }
}