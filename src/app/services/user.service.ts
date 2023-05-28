import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
//import { isNull } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) { }

  register({email, password}: any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({email, password}: any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout(){
    return signOut(this.auth);
  }

  /*async tUID(){
    const user = await this.auth.currentUser;

    if(!isNull(user)){
      return user?.uid;
    }
    else{
      return '';
    }
  }*/
}