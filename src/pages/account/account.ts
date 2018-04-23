import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountProvider } from '../../providers/account/account';

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
  constructor(private account: AccountProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.mockList = [new Account('1','pippo',false),new Account('2','paperino',true)]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage')
  }

  getAccounts(): Array<Account>{
    return this.mockList
  }

  go(acc): void{
    this.mockList.forEach(element => {
      if(acc.id==element.id){
        element.active=true
      }else{
        element.active=false
      }
    });
    alert("going to "+acc.name+"!")
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
