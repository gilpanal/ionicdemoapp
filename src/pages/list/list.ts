import { Component } from '@angular/core';

import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { AddItemPage } from '../add-item/add-item';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage { 
  
  public items: Array<{title: string, description: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public dataService: DataProvider) {
   
    this.dataService.getData().then((todos) => {
      
      if(todos){
        this.items = todos;
      }

    });
    this.items = [];   
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  addItem(){
    
      let addModal = this.modalCtrl.create(AddItemPage);
  
      addModal.onDidDismiss((item) => {
  
            if(item){
              this.saveItem(item);
            }  
      });
  
      addModal.present();  
    }  
    saveItem(item){
      this.items.push(item);
      this.dataService.save(this.items);
    }
}
