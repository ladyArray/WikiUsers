import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  emailInvalid: boolean = false;
  passwordInvalid: boolean = false;
  nameInvalid: boolean = false;
  surnameInvalid: boolean = false;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.createSignUpForm();
  }

  createSignUpForm(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
    });
  }

  public get email() {
    return this.signUpForm.get('email');
  }

  public get password() {
    return this.signUpForm.get('password');
  }

  public get name() {
    return this.signUpForm.get('name');
  }

  public get surname() {
    return this.signUpForm.get('surname');
  }

  signUp() {
    if (this.signUpForm.valid) {
      this.loginService.signUp(this.signUpForm.value).subscribe(() => {
        alert('Registro finalizado');
        this.router.navigateByUrl('login');
        this.signUpForm.reset();
      }),
        (exception: any) => {
          console.log(exception);
        };
    }
  }
}
