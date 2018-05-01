import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountPage } from './account';
import { TranslateModule } from "@ngx-translate/core";
import { AccountDetailComponent } from '../../components/account-detail/account-detail';

@NgModule({
  declarations: [
    
  ],
  imports: [
    IonicPageModule.forChild(AccountPage),
    TranslateModule, 
    
  ],
})
export class AccountPageModule {}
