import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mio',
  templateUrl: './mio.component.html',
  styleUrls: ['./mio.component.scss'],
})
export class MioComponent  implements OnInit {

  show: number;

  tag: any;
  elementTemp: string;
  element: string;
  category: string;

  constructor(private title: Title) {
    title.setTitle('Mecanografia Interactiva ONCE');
    this.category = 'all';
   }

  ngOnInit() {}

  showOpt(opt: number){

    this.show = 0;
    switch (opt){
      case 1:
        this.element = "mio_1";
        this.show = 1;
        break;
    }

    this.elementTemp = this.element;

    this.tag = document.getElementById(this.element);
    this.tag.ariaHidden="false";
  }

  selection(e:string){
    this.category=e;
  }
}
