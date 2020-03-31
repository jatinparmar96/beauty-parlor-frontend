import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-shop-create-form',
	templateUrl: './shop-create-form.component.html',
	styleUrls: [ './shop-create-form.component.scss' ]
})
export class ShopCreateFormComponent implements OnInit {
	shopCreateForm: FormGroup;
	constructor(private fb: FormBuilder) {
		this.shopCreateForm = fb.group({
			username: [ '', [ Validators.required ] ],
			password: [ '', Validators.required ]
		});
	}
	get username() {
		return this.shopCreateForm.controls.username;
	}
	get password() {
		return this.shopCreateForm.controls.password;
	}
	ngOnInit(): void {}
	onSubmit() {}
}
