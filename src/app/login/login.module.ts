import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [ LoginFormComponent ],
	imports: [ CommonModule, LoginRoutingModule, MaterialModule, FormsModule, ReactiveFormsModule ]
})
export class LoginModule {}
