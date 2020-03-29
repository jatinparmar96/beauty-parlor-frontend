import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMainComponent } from './app-main/app-main.component';

const routes: Routes = [
	{
		path: '',
		component: AppMainComponent
	},
	{
		path: 'shop',
		loadChildren: () => import('./shop/shop.module').then((m) => m.ShopModule)
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class MasterRoutingModule {}
