import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Items } from 'src/app/interfaces/items';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  items: Items[];
  showTxt: boolean;

  constructor(
    private itemsSrvc: ItemService,
    private navCtrl: NavController
  ) { 
    this.items =[];
    this.showTxt = false;
  }

  ngOnInit() {
    this.itemsSrvc.getItems().subscribe(items =>{
      this.items = items;
    });
  }

  show(page: any){
    this.navCtrl.navigateForward('/details/'+page);
  }
}
