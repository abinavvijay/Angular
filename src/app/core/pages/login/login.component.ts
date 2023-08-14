import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

// Import the AuthService type from the SDK

@Component({
  selector: 'iv-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  @Input() userId: any;

  public loginForm!: FormGroup;

  // loading: boolean;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.UserSession.subscribe(session => {
      if (session) {
        this.router.navigate(["/search"]);
      }
    })
    this.loginForm = this.formBuilder.group({
      email: [''],

      password: [''],
    });
  }

  login() {

    this
      .authService
      .Login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(session => {
        if (session) {
          this.loginForm.reset();

          this.router.navigate(['search']);
        }
        else {
          alert(
            'Email or password is invalid, please check your credentials'
          );
        }
      })
  }
}
