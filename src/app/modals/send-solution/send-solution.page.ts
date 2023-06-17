import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController, NavParams, ModalController } from '@ionic/angular';

import { InteractionService } from 'src/app/services/interaction.service';
import { ItemService } from 'src/app/services/item.service';

import { Items } from 'src/app/interfaces/items';

@Component({
  selector: 'app-send-solution',
  templateUrl: './send-solution.page.html',
  styleUrls: ['./send-solution.page.scss'],
})
export class SendSolutionPage implements OnInit {

  logged:   string;

  items:    Items[];

  id:             string;
  item:           string;
  classification: string;
  consult:        string;
  answer:         string;
  comments:       string;
  historic:       boolean;

  public formItem: FormGroup;

  constructor(
    private fbBuilder: FormBuilder,
    private itemsSrvc: ItemService,
    private navCtrl: NavController,
    private route: ActivatedRoute, 
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private interactionSrvc: InteractionService
  ) {
      this.logged = String(localStorage.getItem('state'));
      this.items = [];

      this.id = navParams.get('id');

      this.formItem = new FormGroup({});

      this.item = "";
      this.classification = "";
      this.consult = "";
      this.answer = "";
      this.comments = "";
      this.historic = false;

   }

  ngOnInit() {
    this.itemsSrvc.getItems().subscribe(items =>{
      this.items = items;
      
      for(let i of items){
        if(i.id == this.id){
          this.item = i.item;
          this.classification = i.classification;
          this.consult = i.consult;
          this.historic = i.historic;
        }
      }
    });

    this.initForm();

    //console.log("Valor del array:", this.consult);
  }

  initForm(){
    this.formItem = this.fbBuilder.group({
      answer: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(300)]),
      comments: new FormControl('')
    });
  }

  dismiss(){
    this.modalCtrl.dismiss({
      'dismissed': true,
    });
  }

  onSubmit(){
    this.formItem = this.fbBuilder.group({
      category: new FormControl('Solución Propuesta', ),
      item: new FormControl(this.item, ),
      classification: new FormControl(this.classification, ),
      consult: new FormControl(this.consult, ),
      answer: new FormControl(this.formItem.get('answer')?.value, ),
      comments: new FormControl(this.formItem.get('comments')?.value, ),
      historic: new FormControl(this.historic, )
    });

    this.success();
  }

  modify(){
    this.formItem = this.fbBuilder.group({
      category: new FormControl(this.formItem.get('category')?.value, ),
      item: new FormControl(this.formItem.get('item')?.value, ),
      classification: new FormControl(this.formItem.get('classification')?.value, ),
      consult: new FormControl(this.formItem.get('consult')?.value, ),
      answer: new FormControl(this.formItem.get('answer')?.value, ),
      comments: new FormControl(this.formItem.get('comments')?.value, ),
      historic: new FormControl(this.historic, )
    });

    this.edit();
  }

  async success(){
    const response = await this.itemsSrvc.addItem(this.formItem.value);

    this.interactionSrvc.presentToast('Registro subido correctamente.', 2000);
    this.navCtrl.navigateForward('/home');

    this.dismiss();
  }

  async edit(){
    const response = await this.itemsSrvc.updateItem(this.formItem.value, this.id);

    this.interactionSrvc.presentToast('Registro modificado correctamente.', 2000);
    this.navCtrl.navigateForward('/login');

    this.dismiss();
  }
}