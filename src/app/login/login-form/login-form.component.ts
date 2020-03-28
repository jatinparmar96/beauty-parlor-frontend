import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }
  ngOnInit(): void {}
  onSubmit() {
    console.log(this.loginForm);
  }
}
