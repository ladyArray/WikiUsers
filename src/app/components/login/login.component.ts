import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  emailInvalid: boolean = false;
  passwordInvalid: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  public get email() {
    return this.loginForm.get('email');
  }

  public get password() {
    return this.loginForm.get('password');
  }

  login() {
    if (this.loginForm.valid) {
      console.log(
        'Login: ' +
          this.loginForm.get('email')?.value +
          ' ' +
          this.loginForm.get('password')?.value
      );
      this.loginService.login(this.loginForm.value).then(() => {
        alert('Bienvenido/a!');
        this.loginForm.reset();
      }),
        (exception: any) => {
          console.log(exception);
        };
    }
  }
}
