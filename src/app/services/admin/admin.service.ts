import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }
  addReceveur(receveur) {
    const receveurs = JSON.parse(localStorage.getItem("receveurs")) || [];
    receveurs.push(receveur)
    localStorage.setItem("receveurs", JSON.stringify(receveurs))
  }
  listReceveurs() {
    const receveurs = JSON.parse(localStorage.getItem("receveurs")) || [];
    return receveurs;
  }
  }
}
