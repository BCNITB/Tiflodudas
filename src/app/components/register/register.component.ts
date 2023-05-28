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
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      });

      this.submitAttempt = false;

     }

  ngOnInit() { }

  onSubmit(){
    if(this.formReg.get('password')?.value == this.formReg.get('confirmPassword')?.value){
      this.userSrvc.register(this.formReg.value)
        .then(Response => {
          this.interactionSrvc.presentToast('Usuario creado de forma correcta', 2000)
          this.router.navigate(['/edit'])
        })
        .catch(error => {
          this.interactionSrvc.presentToast('Error al crear el nuevo usuario. <br> Inéntelo de nuevo.', 2000)
          console.log(error)
        });
    }
    else{
      this.interactionSrvc.presentToast('Las contraseás no coinciden.', 2000);
    }
  }
}