import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReceveurService {
  constructor() { }

  coffre(){
    const coffre = JSON.parse(localStorage.getItem("coffre")) || [];
    
    return coffre;
  }
}
