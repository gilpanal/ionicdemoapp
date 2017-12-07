import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor( public storage: Storage) {   
    this.loadDefaultItems();
  }
  getData() {
    return this.storage.get('todos'); 
  }
 
  save(data){
    this.storage.set('todos', data);
  }

  loadDefaultItems(){
    this.getData().then((todos) => {     
      if(!todos){
        let myDefaultList = this.createDefaultList();
        this.save(myDefaultList); 
      }
    });
  }

  createDefaultList(){
    let myDefaultList =[
      {title:'It is the end of the world', description:'As we know it (and I feel fine)'},
      {title:'Why does it always rain on me?', description:'Is it because I lied when I was 17?'},
      {title:'Another brick in the wall', description:'We dont need no education'},
      {title:'Everybody has got something to hide', description:'Except me and my monkey'},
      {title:'Cant get enough of myself', description:'Cause my brand does vainglorious much better for your health'},
      {title:'The lost art of keeping a secret', description:'Out on the corner, locked in your room'},
      {title:'Wake up and smell the coffee', description:'That would paralyse your evolution'},
      {title:'The miracle (of Joey Ramone)', description:'Chasing down a dream before it disappeared'},
      {title:'To everything there is a season', description:'A time to be born, and a time to die; a time to plant, a time to reap that which is planted'},
      {title:'Girls just wanna have fun', description:'My mother says when you gonna live your life right'}
    ];
    return myDefaultList;
  }
 
}
