import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AppMainComponent } from './app-main/app-main.component';
import { MaterialModule } from '../material/material.module';
import { ShopModule } from './shop/shop.module';

@NgModule({
	declarations: [ AppMainComponent ],
	imports: [ CommonModule, MasterRoutingModule, SharedModule, ShopModule, MaterialModule ]
})
export class MasterModule {}
