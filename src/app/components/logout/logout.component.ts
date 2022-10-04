import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UsersService } from 'src/app/services/users.service';
import { LoginComponent } from '../login/login.component';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(
    private LoginService: LoginService,
    private router: Router,
    //private LoginComponent: LoginComponent,
    private UsersComponent: UsersComponent // private UsersService:UsersService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.UsersComponent.userlogged = null;
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('refreshToken');
    sessionStorage.removeItem('tokenType');
    //sessionStorage.clear();
    this.router.navigateByUrl('/');
  }

  return() {
    this.router.navigateByUrl('users');
  }
}
