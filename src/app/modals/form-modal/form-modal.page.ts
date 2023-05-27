import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { ItemService } from 'src/app/services/item.service';

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
    //private interctionSrvc: InteractionService
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
  }

}
