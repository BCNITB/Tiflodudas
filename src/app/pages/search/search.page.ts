import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Items } from 'src/app/interfaces/items';
import { ItemService } from 'src/app/services/item.service';

import { PipesModule } from 'src/app/pipes/pipes.module';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  items:    Items[];
  showTxt:  boolean;

  term:     string;
  result:   string;

  constructor(
    private itemsSrvc: ItemService,
    private navCtrl: NavController
  ) { 
    this.items =[];
    this.showTxt = false;
    this.term = "";
    this.result = '';
  }

  ngOnInit() {
    this.itemsSrvc.getItems().subscribe(items =>{
      this.items = items;
    });
  }

  show(page: any){
    this.navCtrl.navigateForward('/details/'+page);
  }

  search(event: any){

    this.term = event.detail.value;
  }
}