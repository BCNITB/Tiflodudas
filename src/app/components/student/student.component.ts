import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent  implements OnInit {

  show: number;

  tag: any;
  elementTemp: string;
  element: string;
  category: string;

  constructor(private title: Title) {
    
    title.setTitle('Student');
    
    this.category = 'all';
  }

  ngOnInit() {
  }

  showOpt(opt: number){

    this.show = 0;
    switch (opt){
      case 1:
        this.element = "student_1";
        this.show = 1;
        break;
      /*case 2:
        this.element = "vo_2";
        this.show = 2;
        break;
      case 3:
      this.element = "vo_3";
      this.show = 3;
      break;
    case 4:
      this.element = "vo_4";
      this.show = 4;
      break;
    case 5:
      this.element = "vo_5";
      this.show = 5;
      break;
    case 6:
      this.element = "vo_6";
      this.show = 6;
      break;
    case 7:
      this.element = "vo_7";
      this.show = 7;
      break;
    case 8:
      this.element = "vo_8";
      this.show = 8;
      break;
    case 9:
      this.element = "vo_9";
      this.show = 9;
      break;
    case 10:
      this.element = "vo_10";
      this.show = 10;
      break;
    case 11:
    this.element = "vo_14";
    this.show = 11;
    break;
  case 12:
    this.element = "vo_12";
    this.show = 12;
    break;
    case 13:
      this.element = "vo_10";
      this.show = 13;
      break;
      case 14:
      this.element = "vo_14";
      this.show = 14;
      break;
      case 15:
      this.element = "vo_15";
      this.show = 15;
      break;
      case 16:
      this.element = "vo_16";
      this.show = 16;
      break;
      case 17:
      this.element = "vo_17";
      this.show = 17;
      break;
      case 18:
      this.element = "vo_18";
      this.show = 18;
      break;
      case 19:
      this.element = "vo_19";
      this.show = 19;
      break;
    case 20:
      this.element = "vo_20";
      this.show = 20;
      break;
    case 20:
      this.element = "vo_21";
      this.show = 21;
      break;
    case 22:
      this.element = "vo_22";
      this.show = 22;
      break;
    case 23:
      this.element = "vo_23";
      this.show = 23;
      break;
    case 24:
      this.element = "vo_24";
      this.show = 24;
      break;
    case 25:
      this.element = "vo_25";
      this.show = 25;
      break;
    case 26:
      this.element = "vo_26";
      this.show = 26;
      break;
    case 27:
      this.element = "vo_27";
      this.show = 27;
      break;
    case 28:
      this.element = "vo_28";
      this.show = 28;
      break;
    case 29:
      this.element = "vo_29";
      this.show = 29;
      break;
    case 30:
      this.element = "vo_30";
      this.show = 30;
      break;
    case 31:
        this.element = "vo_31";
        this.show = 31;
        break;*/
    }

    this.elementTemp = this.element;

    this.tag = document.getElementById(this.element);
    this.tag.ariaHidden="false";
  }

  selection(e:string){
    this.category=e;
  }
}
