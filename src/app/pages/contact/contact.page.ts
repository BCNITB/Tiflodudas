import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  mail: string = "ing.geol@gmail.com";

  constructor(private title: Title) {
    title.setTitle('Tiflodudas | Contacto');
   }

  ngOnInit() {
  }

  sendEmail(){
    let email = "mail.to" + this.mail;
    window.open(email, "_system");
  }

}
