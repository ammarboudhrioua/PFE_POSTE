import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuichitierService {
  baseUrl="/api";
  constructor(private  httpClient: HttpClient) { }
  addDemande(demande) {
    // const listFonds = JSON.parse(localStorage.getItem("fonds-guichitier")) || [];
    // listFonds.push(demande)
    // localStorage.setItem("fonds-guichitier", JSON.stringify(listFonds))
    const user = JSON.parse(localStorage.getItem("userConnected")) || [];
    this.httpClient.post<any>(this.baseUrl+'demandes/addDemande/'+user._id+'/'+user.Coffre,demande).subscribe();
  }
  getCaisse(caisse){
    return this.httpClient.get(this.baseUrl+'caisses/getMatCaisse/'+caisse)
  }
  addCaisse(demande){
    const user = JSON.parse(localStorage.getItem("userConnected")) || [];
    user['Coffre']=demande;
    localStorage.setItem("userConnected", JSON.stringify(user))
  };
  fermetureCaisse(fermeture){
    const caisse = JSON.parse(localStorage.getItem("caisses")) || [];
    caisse.push(fermeture)
    localStorage.setItem("caisses", JSON.stringify(caisse))

  }
  listFonds() {
    const user = JSON.parse(localStorage.getItem("userConnected")) || [];
 return  this.httpClient.get(this.baseUrl+'demandes/UserDemandes/'+user._id)
  }
  details() {
    const fonds = JSON.parse(localStorage.getItem("userConnected")) || [];
    return fonds;
  }
  
}
