import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contacts = [
    {name: 'CHE', phone: '094999999'},
    {name: 'AOT', phone: '094888888'},
    {name: 'PUN', phone: '0940044244'}
  ];

  constructor(public navCtrl: NavController) {
  }

  showData(contact) {
  }
}
