import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseUri: string = "http://localhost:4000";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private _router: Router) { }
  register(body: any) {
    return this.http.post('http://127.0.0.1:4000/users/signup', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }); 
  }

  login(body: any) {
    return this.http.post('http://127.0.0.1:4000/users/login', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }); 
  }
}