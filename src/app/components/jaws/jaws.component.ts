import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-jaws',
  templateUrl: './jaws.component.html',
  styleUrls: ['./jaws.component.scss'],
})
export class JawsComponent  implements OnInit {

  show: number;

  tag: any;
  elementTemp: string;
  element: string;
  category: string;

  constructor(private title: Title) {
    title.setTitle('JAWS');
   }

  ngOnInit() {
    this.category="all";
  }

  showOpt(opt: number){

    this.show = 0;
    switch (opt){
      case 1:
        this.element = "jaws_1";
        this.show = 1;
        break;
      case 2:
        this.element = "jaws_2";
        this.show = 2;
        break;
      case 3:
        this.element = "jaws_3";
        this.show = 3;
        break;
      case 4:
        this.element = "jaws_4";
        this.show = 4;
        break;
      case 5:
        this.element = "jaws_5";
        this.show = 5;
        break;
      case 6:
        this.element = "jaws_6";
        this.show = 6;
        break;
      case 7:
        this.element = "jaws_7";
        this.show = 7;
        break;
      case 8:
        this.element = "jaws_8";
        this.show = 8;
        break;
      case 9:
        this.element = "jaws_9";
        this.show = 9;
        break;
      case 10:
        this.element = "jaws_10";
        this.show = 10;
        break;
      case 11:
        this.element = "jaws_11";
        this.show = 11;
        break;
      case 12:
        this.element = "jaws_12";
        this.show = 12;
        break;
      case 13:
        this.element = "jaws_13";
        this.show = 13;
        break;
      case 14:
        this.element = "jaws_14";
        this.show = 14;
        break;
      case 15:
        this.element = "jaws_15";
        this.show = 15;
        break;
      case 16:
        this.element = "jaws_16";
        this.show = 16;
        break;
      case 17:
        this.element = "jaws_17";
        this.show = 17;
        break;
      case 18:
        this.element = "jaws_18";
        this.show = 18;
        break;
      case 19:
        this.element = "jaws_19";
        this.show = 19;
        break;
      case 20:
        this.element = "jaws_20";
        this.show = 20;
        break;
      case 21:
        this.element = "jaws_21";
        this.show = 21;
        break;
      case 22:
        this.element = "jaws_22";
        this.show = 22;
        break;
      case 23:
        this.element = "jaws_23";
        this.show = 23;
        break;
      case 24:
        this.element = "jaws_24";
        this.show = 24;
        break;
      case 25:
        this.element = "jaws_25";
        this.show = 25;
        break;
      case 26:
        this.element = "jaws_26";
        this.show = 26;
        break;
      case 27:
        this.element = "jaws_27";
        this.show = 27;
        break;
      case 28:
        this.element = "jaws_28";
        this.show = 28;
        break;
      case 29:
        this.element = "jaws_29";
        this.show = 29;
        break;
      case 30:
        this.element = "jaws_30";
        this.show = 30;
        break;
      case 31:
        this.element = "jaws_31";
        this.show = 31;
        break;
      case 32:
        this.element = "jaws_32";
        this.show = 32;
        break;
      case 33:
        this.element = "jaws_33";
        this.show = 33;
        break;
      case 34:
        this.element = "jaws_34";
        this.show = 34;
        break;
      case 35:
        this.element = "jaws_35";
        this.show = 35;
        break;
      case 36:
        this.element = "jaws_36";
        this.show = 36;
        break;
      case 37:
        this.element = "jaws_37";
        this.show = 37;
        break;
      case 38:
        this.element = "jaws_38";
        this.show = 38;
        break;
      case 39:
        this.element = "jaws_39";
        this.show = 39;
        break;
      case 40:
        this.element = "jaws_40";
        this.show = 40;
        break;
      case 41:
        this.element = "jaws_41";
        this.show = 41;
        break;
      case 42:
        this.element = "jaws_42";
        this.show = 42;
        break;
      case 43:
        this.element = "jaws_43";
        this.show = 43;
        break;
      case 44:
        this.element = "jaws_44";
        this.show = 44;
        break;
      case 45:
        this.element = "jaws_45";
        this.show = 45;
        break;
      case 46:
        this.element = "jaws_46";
        this.show = 46;
        break;
      case 47:
        this.element = "jaws_47";
        this.show = 47;
        break;
      case 48:
        this.element = "jaws_48";
        this.show = 48;
        break;
      case 49:
        this.element = "jaws_49";
        this.show = 49;
        break;
      case 50:
        this.element = "jaws_50";
        this.show = 50;
        break;
      case 51:
        this.element = "jaws_51";
        this.show = 51;
        break;
      case 52:
        this.element = "jaws_52";
        this.show = 52;
        break;
      case 53:
        this.element = "jaws_53";
        this.show = 53;
        break;
      case 54:
        this.element = "jaws_54";
        this.show = 54;
        break;
      case 55:
        this.element = "jaws_55";
        this.show = 55;
        break;
      case 56:
        this.element = "jaws_56";
        this.show = 56;
        break;
      case 57:
        this.element = "jaws_57";
        this.show = 57;
        break;
      case 58:
        this.element = "jaws_58";
        this.show = 58;
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