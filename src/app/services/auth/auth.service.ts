import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoginSubject = new BehaviorSubject<boolean>(this.isAuthenticated());
  login(user) {
    const users = JSON.parse(localStorage.getItem("utilisateurs")) || [];
    const exist = users.find((currentUser) => (currentUser.matricule === user.matricule) && (currentUser.password === user.fpassword));
    if (exist === undefined) {
      return false;
    }
    else {
      localStorage.setItem("userConnected",JSON.stringify(exist))
      this.isLoginSubject.next(true);
      return exist.poste;
    };
  }
  logout() {
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
