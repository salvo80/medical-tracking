import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { AccountProvider } from '../../providers/account/account';
import { AccountDetailComponent } from '../../components/account-detail/account-detail';
import BLAKE2s from 'blake2s-js';
import { TerapiaPage } from '../terapia/terapia';
import TextEncoder from 'text-encoding';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  mockList:Array<Account>
  
  constructor(private account: AccountProvider, public navCtrl: NavController, public navParams: NavParams
    ,private popoverCtrl: PopoverController) {
    this.mockList = []
  }

  static toHexx(s:string): string{
    return s.replace(' ','_')//new BLAKE2s(10).update(new TextEncoder("utf-8").encode(s)).hexDigest()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage')
  }

  getAccounts(): Array<Account>{
    return this.mockList
  }

  doAdd(): void{
    let popover = this.popoverCtrl.create(AccountDetailComponent);
    popover.present();
    popover.onDidDismiss(name => this.mockList.push(new Account(AccountPage.toHexx(name),name,false)))
  }

  go(acc): void{
    this.mockList.forEach(element => {
      if(acc.id==element.id){
        element.active=true
      }else{
        element.active=false
      }
    });
    this.navCtrl.push(TerapiaPage)
  }

}

export class Account {
  id:string
  name:string
  active:boolean

  constructor(id:string,name:string,active:boolean){
    this.active=active
    this.id=id
    this.name=name
  }
}
