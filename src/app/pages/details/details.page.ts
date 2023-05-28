import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { Items } from 'src/app/interfaces/items';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  items:  Items[];
  cat:    string;

  constructor(
    private route: ActivatedRoute,
    private itemsSrvc: ItemService,
    private navCtrl: NavController
  ) {
    this.items =[];
    this.cat = String(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
    this.itemsSrvc.getItems().subscribe(items =>{
      this.items = items;
    });
  }

  sendSol(id: any){

  }

  goBack(){
    this.navCtrl.back();
  }
}