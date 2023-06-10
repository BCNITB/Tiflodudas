import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.page.html',
  styleUrls: ['./consult.page.scss'],
})
export class ConsultPage implements OnInit {

  showOption: any;
  showClass: string;

  constructor(private navCtrl: NavController) {
    this.showOption = 1;
    this.showClass = '';
   }

  ngOnInit() {
  }

  showOptions(opt: any, i: string){
    this.showOption = opt;
  
    document.querySelector('.expand-btn')?.setAttribute('class', 'contract-btn');
    document.querySelector('.expand-btn')?.setAttribute('aria-expanded', 'false');
    document.getElementById(i)?.setAttribute('aria-expanded', 'true');
    document.getElementById(i)?.setAttribute('class', 'expand-btn');
  }

  navigateTo(page: string){
    this.navCtrl.navigateForward('/items-list/'+page);
  }
}
