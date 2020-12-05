import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }
  addUser(utilisateur) {
    const utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];
    utilisateurs.push(utilisateur)
    localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs))
  }
  listUsers() {
    const utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];
    return utilisateurs;
  }
  }

