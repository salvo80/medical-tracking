import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  prodotto:string
  prezzo:number
  lista:Array<string>

  constructor(public navCtrl: NavController) {
    this.lista = []
  }

  add():void {
    this.lista.unshift(this.prodotto + '-' + this.prezzo)
    this.prodotto = ''
    this.prezzo = 0
  }

  getList(): Array<string>{
    return this.lista
  }

  getProduct(s:string): string {
    return s.split('-')[0];
  }

  getPrice(s:string): number {
    return Number.parseFloat(s.split('-')[1]);
  }

  getTotal():number{
    if(this.lista.length==0)
      return 0
    return this.lista.map<number>((e)=>this.getPrice(e)).reduce( (prev, curr) => prev + curr)
  }
}
