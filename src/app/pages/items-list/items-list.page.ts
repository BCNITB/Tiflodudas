import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/interfaces/items';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.page.html',
  styleUrls: ['./items-list.page.scss'],
})
export class ItemsListPage implements OnInit {

  items:      Items[];
  
  cat:        string;
  logged:     string;

  constructor(
    private itemsSrvc: ItemService,
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) { 
    this.items =[];

    this.cat = String(this.route.snapshot.paramMap.get('id'));

    this.logged = "";
  }

  ngOnInit() {

    this.itemsSrvc.getItems().subscribe(items =>{
      this.items = items;
      
      /*for(let i of items){
        if(i.item == this.item){
          this.consults.push(i);
        }
      }

      console.log(this.items);
      console.log("Questions:", this.consults);*/
    });
  }

  ionViewWillEnter(){
    this.logged = String(localStorage.getItem('state'));
  }
  
  show(page: any){
    this.navCtrl.navigateForward('/details/'+page);
  }
  
  goBack(){
    this.navCtrl.back();
  }

  trackByFn(index: number, item: Items): string {
    return String(item.id);
  }
}