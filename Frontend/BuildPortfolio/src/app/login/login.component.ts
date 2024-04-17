import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    })
  }

  loginForm : FormGroup;

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm.get('username')?.value);
    console.log(this.loginForm.get('password')?.value);
    console.log(this.loginForm.get('confirmPassword')?.value);
  }

}
