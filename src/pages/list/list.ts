import { Component } from '@angular/core';

import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { AddItemPage } from '../add-item/add-item'

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
  icons: string[];
  public items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
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
    }
}
