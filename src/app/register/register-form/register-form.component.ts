import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-register-form',
	templateUrl: './register-form.component.html',
	styleUrls: [ './register-form.component.scss' ]
})
export class RegisterFormComponent implements OnInit {
	registerForm: FormGroup;
	constructor(private fb: FormBuilder) {
		this.registerForm = fb.group({
			name: [ , Validators.required ],
			username: [ , Validators.required ],
			password: [ , Validators.required ],
			confirm_password: [ , Validators.required ]
		});
	}
	get name() {
		return this.registerForm.controls.name;
	}
	get username() {
		return this.registerForm.controls.username;
	}
	get password() {
		return this.registerForm.controls.password;
	}
	get confirm_password() {
		return this.registerForm.controls.confirm_password;
	}
	ngOnInit(): void {}

	onSubmit() {
		console.log(this.registerForm.value);
	}
}
