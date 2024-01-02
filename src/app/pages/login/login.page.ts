import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Items } from 'src/app/interfaces/items';

import { InteractionService } from 'src/app/services/interaction.service';
import { ItemService } from 'src/app/services/item.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  items: Items[];

  mail:           string;
  pass:           string;
  msgLabel:       string;
  submitAttempt:  boolean;
  logged:         string;

  count:        number;
  countNew:     number;
  countContact: number;

  constructor(
    private navCtrl: NavController,
    private itemsSrvc: ItemService,
    private userSrvc: UserService,
    private interactionSrvc: InteractionService,
    private router: Router,
    private title: Title
  ) { 
    
    title.setTitle('Tiflodudas | Área Personal');
    
    this.mail = "";
    this.pass = "";

    this.submitAttempt = false;
    this.logged = String(localStorage.getItem('state'));
    this.msgLabel = "";

    this.count = 0;
    this.countNew = 0;
    this.countContact = 0;

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
        if(i.category == 'contacto'){
          this.countNew = this.countContact + 1;
        }
      }
    });
  }

  login(){
    console.log("Correo: ", this.mail.valueOf());
    console.log("Contraseña: ", this.pass.valueOf());

    if(this.mail == "bcn4itb@gmail.com" && this.pass == "Manubles"){
      this.logged = "connected";
      this.saveState();
    } else {
      if(this.mail != "bcn4itb@gmail.com"){
        this.interactionSrvc.presentToast('Ha habido problemas al iniciar la sesión', 2000);
        this.submitAttempt = true;
        this.msgLabel = "El Correo Electrónico es incorrecto."
      } else {
        this.interactionSrvc.presentToast('Ha habido problemas al iniciar la sesión', 2000);
        this.submitAttempt = true;
        this.msgLabel = "Ña Contraseña es incorrecta."
      }
    }
  }
 
  erase(){
    this.mail = "";
    this.pass = "";
  }

  cancel(){
    this.mail = "";
    this.pass = "";
  }
  
  saveState() {
    localStorage.setItem('state', this.logged);
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
    if(id == 3){
      page = 'contacto';
    }
    this.navCtrl.navigateForward('/items-list/'+page);
  }
}