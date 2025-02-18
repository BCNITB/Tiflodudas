import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Title } from '@angular/platform-browser';

import { Items } from 'src/app/interfaces/items';
import { ItemService } from 'src/app/services/item.service';

import { PipesModule } from 'src/app/pipes/pipes.module';

import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  items:    Items[];
  results:   any[] = [];

  showTxt:  boolean;

  searchTerm: string = '';
  term:     string;
  result:   string;

  constructor(
    private itemsSrvc: ItemService,
    private navCtrl: NavController,
    private title: Title,
    private searchService: SearchService
  ) { 
    
    title.setTitle('Tiflodudas | Búsqueda');
    
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

  onSearch(event: any) {
    const value = event.target.value;
    if (value && value.trim() !== '') {
      this.searchService.SearcDoc('fieldName', value).subscribe(data => {
        this.results = data;
      });
    } else {
      this.results = [];
    }
  }

  show(page: any){
    this.navCtrl.navigateForward('/details/'+page);
  }

  search(event: any){

    this.term = event.detail.value;
  }
}