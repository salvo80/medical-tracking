import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the AccountDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'account-detail',
  templateUrl: 'account-detail.html'
})
export class AccountDetailComponent {
  name: string

  constructor(public viewCtrl: ViewController) {
    this.name = ''
  }

  close(){
    this.viewCtrl.dismiss(this.name);
  }
}
