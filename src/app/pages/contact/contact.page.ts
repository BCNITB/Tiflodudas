import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { Categories } from 'src/app/interfaces/categories';
import { CATEGORIES } from 'src/app/data/data';

import { ModalController } from '@ionic/angular';
import { FormModalPage } from 'src/app/modals/form-modal/form-modal.page';
import { ActivatedRoute } from '@angular/router';
import { ContactModalPage } from 'src/app/modals/contact-modal/contact-modal.page';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  public formItem: FormGroup;

  categories: Categories[];

  category: any;

  counter1: number;
  counter2: number;
  
  constructor(
    private fbBuilder: FormBuilder,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private title: Title
  ) { 

    title.setTitle('Tiflodudas | Conntacto');
    
    this.counter1 = 0;
    this.counter2 = 0;

    this.formItem = new FormGroup({});
    this.categories = CATEGORIES;
  }

  ngOnInit() {
    this.initForm();
  }

  onKey(event:any, pos: number){
    if(pos == 1)
      this.counter1 = event.target.value.length;
    if(pos == 2)
      this.counter2 = event.target.value.length;
  }

  initForm(){
    this.formItem = this.fbBuilder.group({
      category: new FormControl('contacto'),
      mail: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(150), Validators.email]),
      msg: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(1500)]),
      consent: new FormControl('false', [Validators.requiredTrue])
    })
  }

  async onSubmit(){
    console.log(this.formItem.value);
    //const response = await this.itemSrvc.addItem(this.formItem.value);
    
    this.presentModal();

    //console.log(response);
    
    //this.formItem = new FormGroup({});
    //this.navCtrl.navigateForward('/form-answer');    
 }

  async presentModal(){
    const modal = await this.modalCtrl.create({
      component: ContactModalPage,
      componentProps: {
        'category': this.formItem.get('category')?.value,
        'mail': this.formItem.get('mail')?.value,
        'msg': this.formItem.get('msg')?.value,
        'consent': this.formItem.get('consent')?.value,
      }
    });

    return await modal.present();
  }
}