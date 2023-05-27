import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController, NavParams } from '@ionic/angular';

import { ItemService } from 'src/app/services/item.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.page.html',
  styleUrls: ['./form-modal.page.scss'],
})
export class FormModalPage implements OnInit {

  id: string;
  category: string;
  item: string;
  classification: string;
  consult: string;
  answer: string;
  historic: boolean;

  public formItem: FormGroup;

  constructor(
    private fbBuilder: FormBuilder,
    private itemSrvc: ItemService,
    private navCtrl: NavController,
    private route: ActivatedRoute, 
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private interactionSrvc: InteractionService
  ) {
    this.id = navParams.get('iid');
    this.category = navParams.get('category');  
    this.item = navParams.get('item');
      this.classification = navParams.get('classification');
      this.consult = navParams.get('consult');
      this.answer = navParams.get('answer');
      this.historic = navParams.get('historic');

      this.formItem = new FormGroup({});
   }

  ngOnInit() {
    this.formItem = this.fbBuilder.group({
      category: new FormControl(this.category, ),
      item: new FormControl(this.item, ),
      classification: new FormControl(this.classification, ),
      consult: new FormControl(this.consult, ),
      answer: new FormControl(this.answer, ),
      historic: new FormControl(this.historic, )
    });
  }

  dismiss(){
    this.modalCtrl.dismiss({
      'dismissed': true,
    });
  }

  async success(){
    const response = await this.itemSrvc.addItem(this.formItem.value);

    this.interactionSrvc.presentToast('Registro subido correctamente.', 2000);
    this.navCtrl.navigateForward('/new-entry');

    this.dismiss();
  }
}
