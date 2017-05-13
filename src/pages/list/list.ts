import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  subjects: string[];
  items: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.subjects = ['Geometry', 'Calculus', 'Biology', 'Programming', 'Statistics', 'Chemistry', 'Psychology', 'English', 'ESL', 'History'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: this.subjects[i]
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
