import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url: string = 'http://51.38.51.187:5050/api/v1/auth';
  headers = new HttpHeaders({ 'Content-type': 'application/json' });
  constructor(private http: HttpClient) {}

  public login(newLogin: any) {
    return this.http.post<any>(
      this.url + '/log-in',
      { email: newLogin.email, password: newLogin.password },
      { headers: this.headers }
    );
  }

  public logout(oldLogin: any) {
    return this.http.post<any>(
      this.url + '/log-in',
      { headers: this.headers }
    );
  }

  public signUp(newUser: any) {
    return this.http.post<any>(
      this.url + '/sign-up',
      {
        name: newUser.name,
        surname: newUser.surname,
        email: newUser.email,
        password: newUser.password,
      },
      { headers: this.headers }
    );
  }
}
