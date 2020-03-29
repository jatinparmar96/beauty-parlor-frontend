import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./login/login.module').then((m) => m.LoginModule)
	},
	{
		path: 'register',
		pathMatch: 'full',
		loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule)
	},
	{
		path: 'master',
		loadChildren: () => import('./master/master.module').then((m) => m.MasterModule)
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
