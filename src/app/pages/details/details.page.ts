import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { Items } from 'src/app/interfaces/items';
import { AlertController, ModalController, NavController } from '@ionic/angular';

import { SendSolutionPage } from 'src/app/modals/send-solution/send-solution.page';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  items:  Items[];
  cat:    string;
  logged: string;

  constructor(
    private route: ActivatedRoute,
    private itemsSrvc: ItemService,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
  ) {
    this.items =[];
    this.cat = String(this.route.snapshot.paramMap.get('id'));
    this.logged = String(localStorage.getItem('state'));
   }

  ngOnInit() {
    this.itemsSrvc.getItems().subscribe(items =>{
      this.items = items;
    });
  }

  ionViewWillEnter(){
    this.logged = String(localStorage.getItem('state'));
  }

  goBack(){
    this.navCtrl.back();
  }

 async  edit(id: any){
    const modal = await this.modalCtrl.create({
      component: SendSolutionPage,
      componentProps: {
        'id': id
      }
    });

    return await modal.present();
  }

  async erase(item: Items){
    const alert = await this.alertCtrl.create({
      header: 'Eliminar registro',
      message: '¿Quieres elimnar este registro?',
      buttons: [
        {
          text: 'No',
        },
        {
          text: 'Sí',
          handler: () => {
            this.itemsSrvc.deleteItem(item);
          }
        }
      ]
    });

    await alert.present();
  }

  async sendSol(){
    const modal = await this.modalCtrl.create({
      component: SendSolutionPage,
      componentProps: {
        'id': this.cat
      }
    });

    return await modal.present();
  }

  async update(item: Items){
    const alert = await this.alertCtrl.create({
      header: 'Actualizar registro',
      message: '¿Quieres actualizar este registro?',
      buttons: [
        {
          text: 'No',
        },
        {
          text: 'Sí',
          handler: () => {
            this.itemsSrvc.updateCollection(item, { state: 'solved' });
          }
        }
      ]
    });

    await alert.present();
  } 
}