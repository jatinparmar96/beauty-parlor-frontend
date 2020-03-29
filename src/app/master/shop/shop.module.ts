import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopCreateFormComponent } from './shop-create-form/shop-create-form.component';


@NgModule({
  declarations: [ShopCreateFormComponent],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
