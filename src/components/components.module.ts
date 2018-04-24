import { NgModule } from '@angular/core';
import { FarmacoComponent } from './farmaco/farmaco';
import { AccountDetailComponent } from './account-detail/account-detail';
@NgModule({
	declarations: [FarmacoComponent,
    AccountDetailComponent],
	imports: [],
	exports: [FarmacoComponent,
    AccountDetailComponent]
})
export class ComponentsModule {}
