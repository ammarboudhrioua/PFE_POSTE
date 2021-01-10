import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl="/api";
  constructor(private  httpClient: HttpClient) { }
  isLoginSubject = new BehaviorSubject<boolean>(this.isAuthenticated());
 
  login(user) {
  return  this.httpClient.post<any>(this.baseUrl+'/logins/login',user)  
  }


  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userConnected');
    this.isLoginSubject.next(false);
  }
    public isAuthenticated(): boolean {
      const token = localStorage.getItem('userConnected');
      if (token === null) {
        return false;
      }
      else {
       return true;
    }
}
notifications() {
  const fonds = JSON.parse(localStorage.getItem("userConnected")) || [];
  return fonds;
}
}
