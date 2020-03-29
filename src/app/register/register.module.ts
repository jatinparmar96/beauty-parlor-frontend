import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
	declarations: [ RegisterFormComponent ],
	imports: [ CommonModule, RegisterRoutingModule, MaterialModule, ReactiveFormsModule, FormsModule ]
})
export class RegisterModule {}
