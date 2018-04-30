import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FarmacoComponent } from '../../components/farmaco/farmaco';

/**
 * Generated class for the FarmacoPopOverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-farmaco-pop-over',
  templateUrl: 'farmaco-pop-over.html',
})
export class FarmacoPopOverPage {
  current:FarmacoComponent

  constructor(public navCtrl: NavController, public navParams: NavParams
    ,public viewCtrl: ViewController) {
    this.current = new FarmacoComponent()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FarmacoPopOverPage');
  }
  add(){
    this.viewCtrl.dismiss(this.current);
  }
}
