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
  fermetureCaisse(fermeture){
    const caisse = JSON.parse(localStorage.getItem("caisses")) || [];
    caisse.push(fermeture)
    localStorage.setItem("caisses", JSON.stringify(caisse))

  }
  listFonds() {
    const fonds = JSON.parse(localStorage.getItem("fonds-guichitier")) || [];
    return fonds;
  }
  details() {
    const fonds = JSON.parse(localStorage.getItem("userConnected")) || [];
    return fonds;
  }
  
}
