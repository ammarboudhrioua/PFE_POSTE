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
    const coffre = JSON.parse(localStorage.getItem("coffres")) || [];
    const user = JSON.parse(localStorage.getItem("userConnected")) || [];
    return coffre.find(e =>e.matriculeCoffre===user.coffre);
  }
  addCoffre(demande){
    const user = JSON.parse(localStorage.getItem("userConnected")) || [];
    user['coffre']=demande;
    localStorage.setItem("userConnected", JSON.stringify(user))
    
  };
  addNewCoffre(demande) {
    const newCoffre = JSON.parse(localStorage.getItem("coffres")) || [];
    newCoffre.push(demande)
    localStorage.setItem("coffres", JSON.stringify(newCoffre))
  }
  getCoffre(x){
    const coffres = JSON.parse(localStorage.getItem("coffres")) || [];
const exist =coffres.find((currentCoffre) => ((currentCoffre.matriculeCoffre) === (x)));
console.log(exist);

if (exist === undefined) {
  return false;
}
else {

  return true
};
  }
}
