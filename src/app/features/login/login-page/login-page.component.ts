import { Component, OnInit } from '@angular/core';
import { FormArray, NgForm, Validators } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
export interface Loginarray {
  username: string;
  password: string;
  email: string;
}
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  signupForm!: FormGroup;
  logindata: Loginarray[] = [];
  usernamerequired: string = 'Please Provide a Username ';
  passwordrequired: string = 'Please Provide a Password ';
  submmited: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
      Remember: this.fb.control('', Validators.required),
    });
  }
  get errorshow() {
    return this.signupForm.controls;
  }
  datashow(signupForm: any) {
    if (this.signupForm.invalid) {
      this.submmited = true;
      return;
    } else {
      const data = {
        id: this.logindata.length + 1,
        ...this.signupForm.value,
      };
      this.logindata.push(data);
      localStorage.setItem('username', this.signupForm.value.username);
      this.router.navigateByUrl("/services")
    }
    this.signupForm.reset();
  }
}
