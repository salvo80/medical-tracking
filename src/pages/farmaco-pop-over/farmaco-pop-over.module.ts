import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FarmacoPopOverPage } from './farmaco-pop-over';

@NgModule({
  declarations: [
    FarmacoPopOverPage,
  ],
  imports: [
    IonicPageModule.forChild(FarmacoPopOverPage),
  ],
})
export class FarmacoPopOverPageModule {}
