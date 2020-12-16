import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReceveurService {
  constructor() { }
historique(){
  const historique = JSON.parse(localStorage.getItem("fonds-guichitier")) || [];
  return historique
};
  coffre(){
    const coffre = JSON.parse(localStorage.getItem("coffre")) || [];
    
    return coffre;
  }
}
