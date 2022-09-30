import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  emailInvalid: boolean = false;
  passwordInvalid: boolean = false;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public get email() {
    return this.loginForm.get('email');
  }

  public get password() {
    return this.loginForm.get('password');
  }

  login() {
    if (this.loginForm.valid) {

      this.loginService.login(this.loginForm.value).subscribe(
        (response) => {
          sessionStorage.setItem('token', response.accessToken);
          sessionStorage.setItem('refreshToken', response.refreshToken);
          sessionStorage.setItem('tokenType', response.tokenType);
          this.router.navigateByUrl('users');
        },
        (error) => {
          console.error(error.error.message);
        }
      );
    }
  }
}
