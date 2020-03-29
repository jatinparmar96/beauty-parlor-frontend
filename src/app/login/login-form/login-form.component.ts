import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: [ './login-form.component.scss' ]
})
export class LoginFormComponent implements OnInit {
	loginForm: FormGroup;
	constructor(private fb: FormBuilder) {
		this.loginForm = fb.group({
			username: [ '', [ Validators.required ] ],
			password: [ '', Validators.required ]
		});
	}
	get username() {
		return this.loginForm.controls.username;
	}
	get password() {
		return this.loginForm.controls.password;
	}
	ngOnInit(): void {}
	onSubmit(): void {
		if (this.loginForm.invalid) {
			return;
		}
	}
}
