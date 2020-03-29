import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopCreateFormComponent } from './shop-create-form/shop-create-form.component';

const routes: Routes = [
	{
		path: '',
		component: ShopCreateFormComponent
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class ShopRoutingModule {}
