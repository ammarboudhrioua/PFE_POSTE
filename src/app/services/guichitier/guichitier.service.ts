import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuichitierService {

  constructor() { }
  addDemande(demande) {
    const listFonds = JSON.parse(localStorage.getItem("fonds-guichitier")) || [];
    listFonds.push(demande)
    localStorage.setItem("fonds-guichitier", JSON.stringify(listFonds))
  }
  listFonds() {
    const fonds = JSON.parse(localStorage.getItem("fonds-guichitier")) || [];
    return fonds;
  }
}
