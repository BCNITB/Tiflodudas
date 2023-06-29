import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Items } from 'src/app/interfaces/items';

import { ItemService } from 'src/app/services/item.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  items: Items[];

  logged: string;

  count:    number;
  countNew: number;

  constructor(
    private navCtrl: NavController,
    private itemsSrvc: ItemService,
    private userSrvc: UserService
  ) { 
    //this.logged = String(localStorage.getItem('state'));

    this.count = 0;
    this.countNew = 0;

    this.items = [];
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.logged = String(localStorage.getItem('state'));

    this.itemsSrvc.getItems().subscribe(items =>{
      this.items = items;
      
      for(let i of items){
        if(i.category == 'Solución Propuesta'){
          this.count = this.count + 1;
        }
        if(i.category == 'colaboración'){
          this.countNew = this.countNew + 1;
        }
      }
    });
  }

  logout(){
    //this.userSrvc.logout();
    this.logged = "no connected";
    localStorage.setItem('state', this.logged);
  }

  seeSol(id: number){
    let page = "";

    if(id == 1){
      page = 'Solución Propuesta';
    }
    if(id == 2){
      page = 'colaboración';
    }
    this.navCtrl.navigateForward('/items-list/'+page);
  }
}