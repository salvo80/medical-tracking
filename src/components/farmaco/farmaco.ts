import { Component } from '@angular/core';

/**
 * Generated class for the FarmacoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'farmaco',
  templateUrl: 'farmaco.html'
})
export class FarmacoComponent {

  constructor(public name: string
    , public misura: string
    , public periodicity:string
    , public span:string
    , public alert:boolean) {
  }

}
