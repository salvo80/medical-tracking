import { NgModule } from '@angular/core';
import { FarmacoComponent } from './farmaco/farmaco';
import { AccountDetailComponent } from './account-detail/account-detail';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [FarmacoComponent,
    AccountDetailComponent],
	imports: [TranslateModule, IonicModule],
	exports: [FarmacoComponent,
    AccountDetailComponent]
})
export class ComponentsModule {}
