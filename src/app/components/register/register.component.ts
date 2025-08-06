import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { InteractionService } from 'src/app/services/interaction.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {

  formReg: FormGroup;
  submitAttempt: boolean;
  
  msgLabel: any;

  constructor(
    private userSrvc: UserService,
    private router: Router,
    private interactionSrvc: InteractionService
  ) {
    this.formReg = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      });

      this.submitAttempt = false;

     }

  ngOnInit() { }

  onSubmit(){
    this.submitAttempt = true;
    if (this.formReg.invalid) {
      this.interactionSrvc.presentToast('Por favor, completa todos los campos correctamente.', 2000);
      return;
    }
    if (this.formReg.get('password')?.value !== this.formReg.get('confirmPassword')?.value) {
      this.interactionSrvc.presentToast('Las contraseñas no coinciden.', 2000);
      return;
    }
    const { email, password } = this.formReg.value;
    this.userSrvc.register({ email, password })
      .then(Response => {
        this.interactionSrvc.presentToast('Usuario creado de forma correcta', 2000)
        this.router.navigate(['/edit'])
      })
      .catch(error => {
      let msg = 'Error al crear el nuevo usuario. Inténtelo de nuevo.';
      if (error.code === 'auth/email-already-in-use') {
        msg = 'El correo electrónico ya está registrado.';
      }
      this.interactionSrvc.presentToast(msg, 2000);
      console.log(error);
    });
   }
}