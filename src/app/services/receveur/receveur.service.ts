import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReceveurService {
  baseUrl="/api";
  constructor(private  httpClient: HttpClient) { }
historique(){
};
  coffre(){
    const user = JSON.parse(localStorage.getItem("userConnected")) || [];
    return this.httpClient.get(this.baseUrl+'coffres/getMatCoffres/'+user.coffre)}

  addCoffre(demande){
    const user = JSON.parse(localStorage.getItem("userConnected")) || [];
    user['coffre']=demande;
    localStorage.setItem("userConnected", JSON.stringify(user))
  };
  addNewCoffre(data,coff) {
    this.httpClient.post<any>(this.baseUrl+'coffres/addCoffre',data).subscribe((res:any)=>{
      console.log(res.coffre);
    this.httpClient.post<any>(this.baseUrl+'historique/createCofhistory/'+res.coffre._id,coff).subscribe();
    })
  }
  getCoffre(id){
  return this.httpClient.get(this.baseUrl+'coffres/getMatCoffres/'+id)
  }
  listCaisses(){
    const user = JSON.parse(localStorage.getItem("userConnected")) || [];
    return this.httpClient.get(this.baseUrl+'caisses/allcaisses/'+user.coffre)
  }
  addDab(dab){
    const user = JSON.parse(localStorage.getItem("userConnected")) || [];
   return this.httpClient.put<any>(this.baseUrl+'coffres/addDab/'+user.coffre,dab)
  }
  retraitDab(dab){
    const user = JSON.parse(localStorage.getItem("userConnected")) || [];
    return this.httpClient.put<any>(this.baseUrl+'coffres/retraitDab/'+user.coffre,dab)
  }
  addHistorique(data){
    const user = JSON.parse(localStorage.getItem("userConnected")) || [];
  return this.httpClient.post<any>(this.baseUrl+'historique/addHistorique/'+user.coffre,data)
  }
  listNotification(){
    const user = JSON.parse(localStorage.getItem("userConnected")) || [];
    return this.httpClient.get(this.baseUrl+'demandes/listeDemandes/'+user.coffre)
  }
  refuseDemande(idDemande){
    const user = JSON.parse(localStorage.getItem("userConnected")) || [];
  }
  alimCoffre(data,coff) {
    console.log(data);
    const user = JSON.parse(localStorage.getItem("userConnected")) || [];
    this.httpClient.post<any>(this.baseUrl+'coffres/alimCoffre/'+user.coffre,data).subscribe((res:any)=>{
      console.log(res.coffre);
    this.httpClient.post<any>(this.baseUrl+'historique/createCofhistory/'+res.coffre._id,coff).subscribe();
    })
  }
}
