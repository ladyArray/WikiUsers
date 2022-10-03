import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.loginService.logout(this.logout).subscribe((response) => {
      sessionStorage.removeItem(response.accessToken);
      sessionStorage.removeItem(response.refreshToken);
      sessionStorage.removeItem(response.tokenType);
      this.router.navigateByUrl('home');
    });
  }
}
