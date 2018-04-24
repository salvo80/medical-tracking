import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FarmacoComponent } from '../../components/farmaco/farmaco';
import { PopoverController } from 'ionic-angular';
import { FarmacoPopOverPage } from '../farmaco-pop-over/farmaco-pop-over';

/**
 * Generated class for the TerapiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terapia',
  templateUrl: 'terapia.html',
})
export class TerapiaPage {
  farmaci:Array<FarmacoComponent>
  constructor(public navCtrl: NavController, public navParams: NavParams
    , private popoverCtrl: PopoverController) {
    this.farmaci = []
  }

  doAdd(current: FarmacoComponent) {
    this.farmaci.push(current)
  }

  openFarmacoPopup() {
    let popover = this.popoverCtrl.create(FarmacoPopOverPage);
    popover.present();
    popover.onDidDismiss(item => this.farmaci.push(item))
  }

  handleAlert(selected: FarmacoComponent){
    selected.alert = !selected.alert
    alert('TODO: '+(selected.alert?'open alert settings':'disable alert'))
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TerapiaPage');
  }

}
