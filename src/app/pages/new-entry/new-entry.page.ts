import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';

import { Categories } from 'src/app/interfaces/categories';
import { CATEGORIES } from 'src/app/data/data';


import { ModalController } from '@ionic/angular';
import { FormModalPage } from 'src/app/modals/form-modal/form-modal.page';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.page.html',
  styleUrls: ['./new-entry.page.scss'],
})

export class NewEntryPage implements OnInit {

  role: string;

  public formItem: FormGroup;

  categories: Categories[];

  category: any;

  counter1: number;
  counter2: number;
  counter3: number;
  counter4: number;

  constructor(
    private fbBuilder: FormBuilder,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
  ) { 

    this.role = String(this.route.snapshot.paramMap.get('id'));
    
    this.counter1 = 0;
    this.counter2 = 0;
    this.counter3 = 0;
    this.counter4 = 0;

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
    if(pos == 3)
      this.counter3 = event.target.value.length;
      if(pos == 4)
      this.counter4 = event.target.value.length;
   }

  initForm(){
    if(this.role == 'admin'){
      this.formItem = this.fbBuilder.group({
        category: new FormControl('', Validators.required),
        item: new FormControl('', Validators.required),
        classification: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]),
        consult: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(300)]),
        answer: new FormControl(''),
        comments: new FormControl(''),
        historic: new FormControl('')
      });
    } else {
      this.formItem = this.fbBuilder.group({
        category: new FormControl('colaboración'),
        item: new FormControl('', Validators.required),
        classification: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]),
        consult: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(300)]),
        answer: new FormControl(''),
        comments: new FormControl(''),
        historic: new FormControl('')
      })
    }
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
      component: FormModalPage,
      componentProps: {
        'category': this.formItem.get('category')?.value,
        'item': this.formItem.get('item')?.value,
        'classification': this.formItem.get('classification')?.value,
        'consult': this.formItem.get('consult')?.value,
        'answer': this.formItem.get('answer')?.value,
        'comments': this.formItem.get('comments')?.value,
        'historic': this.formItem.get('historic')?.value,
      }
    });

    return await modal.present();
  }
}
