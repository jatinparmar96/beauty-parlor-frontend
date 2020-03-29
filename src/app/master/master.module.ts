import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AppMainComponent } from './app-main/app-main.component';

@NgModule({
	declarations: [ AppMainComponent ],
	imports: [ CommonModule, MasterRoutingModule, SharedModule ]
})
export class MasterModule {}
