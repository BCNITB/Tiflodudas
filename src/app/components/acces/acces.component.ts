import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { InteractionService } from 'src/app/services/interaction.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-acces',
  templateUrl: './acces.component.html',
  styleUrls: ['./acces.component.scss'],
})
export class AccesComponent  implements OnInit {

  formLogin:      FormGroup;
  msgLabel:       string;
  submitAttempt:  boolean;
  logged:         string;

  constructor(
    private userSrvc: UserService,
    private router: Router,
    private interactionSrvc: InteractionService
  ) { 
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)])
    });

    this.submitAttempt = false;
    this.logged = String(localStorage.getItem('state'));
    this.msgLabel = "";
  }

  ngOnInit() {}

  ionViewWillEnter(){
    this.logged = String(localStorage.getItem('state'));
  }

  onSubmit(){
    this.userSrvc.login(this.formLogin.value)
      .then(Response => {
        localStorage.setItem('state', "connected");
        this.interactionSrvc.presentToast('La sesión se ha iniciado de forma correcta', 2000);
        this.saveState();
        this.router.navigate(['/new-entry']);
      })
      .catch(Error => {
        this.interactionSrvc.presentToast('Ha habido problemas al iniciar la sesión', 2000);
        this.submitAttempt = true;
        this.msgLabel = "El Correo Electrónico o la Contraseña son incorrectos."
      });
  }
  
  saveState() {
    this.logged = "connected";
    localStorage.setItem('state', this.logged);
  }
}