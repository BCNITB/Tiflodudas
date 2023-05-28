import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { Items } from 'src/app/interfaces/items';
import { AlertController, NavController } from '@ionic/angular';

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
    private alertCtrl: AlertController
  ) {
    this.items =[];
    this.cat = String(this.route.snapshot.paramMap.get('id'));
    this.logged = "";
   }

  ngOnInit() {
    this.itemsSrvc.getItems().subscribe(items =>{
      this.items = items;
    });
  }

  ionViewWillEnter(){
    this.logged = String(localStorage.getItem('state'));
  }

  sendSol(id: any){

  }

  goBack(){
    this.navCtrl.back();
  }

  edit(id: any){

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
}