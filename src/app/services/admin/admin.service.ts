import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }
  addUser(receveur) {
    const utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];
    utilisateurs.push(receveur)
    localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs))
  }
  listReceveurs() {
    const receveurs = JSON.parse(localStorage.getItem("receveurs")) || [];
    return receveurs;
  }
  }

