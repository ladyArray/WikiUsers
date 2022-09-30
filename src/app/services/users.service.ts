import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url: string = 'http://51.38.51.187:5050/api/v1/users';
  headers: HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
  });
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.url, { headers: this.headers });
  }

  search(id: string): Observable<any> {
    return this.http.get(this.url + '/' + id, { headers: this.headers });
  }

  userLogged(me: string) {
    return this.http.get(this.url + '/' + me, { headers: this.headers });
  }
}
