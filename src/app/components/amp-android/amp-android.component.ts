import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amp-android',
  templateUrl: './amp-android.component.html',
  styleUrls: ['./amp-android.component.scss'],
})
export class AmpAndroidComponent  implements OnInit {

  show: number;

  tag: any;
  elementTemp: string;
  element: string;
  category: string;

  constructor() { 
    this.category = 'all';
  }

  ngOnInit() {
  }

  showOpt(opt: number){

    this.show = 0;
    switch (opt){
      case 1:
        this.element = "ampAndroid_1";
        this.show = 1;
        break;
      case 2:
        this.element = "ampAndroid_2";
        this.show = 2;
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