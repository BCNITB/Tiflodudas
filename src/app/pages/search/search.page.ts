import { Component, OnInit, Injector } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Title } from '@angular/platform-browser';

import { Items } from 'src/app/interfaces/items';
import { ItemService } from 'src/app/services/item.service';

import { PipesModule } from 'src/app/pipes/pipes.module';

import { SearchService } from 'src/app/services/search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  items:      Items[];

  searchResults$: Observable<Items[]>;
  searchValue: string = '';

  constructor(
    private title: Title,
    private searchService: SearchService,
    private itemsSrvc: ItemService,
    private navCtrl: NavController,
  ) {
    this.title.setTitle('Tiflodudas | Búsqueda');

    this.items =[];
  }

  ngOnInit() {
    this.itemsSrvc.getItems().subscribe(items =>{
      this.items = items;
    });
  }

  onSearch() {
    if (this.searchValue.trim()) {
      this.searchResults$ = this.searchService.search(
        this.searchValue,
        'consult',
        'items'
      );
    }
  }

  show(page: any){
    this.navCtrl.navigateForward('/details/'+page);
  }
}