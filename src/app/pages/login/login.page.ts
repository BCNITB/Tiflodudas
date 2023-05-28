import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logged: string;

  constructor(private userSrvc: UserService) { 
    this.logged = "";
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.logged = String(localStorage.getItem('state'));
  }

  logout(){
    this.userSrvc.logout();
    this.logged = "No";
    localStorage.setItem('state', this.logged);
  }
}
