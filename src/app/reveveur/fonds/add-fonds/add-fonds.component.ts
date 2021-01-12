import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReceveurService } from 'src/app/services/receveur/receveur.service';


@Component({
  selector: 'app-add-fonds',
  templateUrl: './add-fonds.component.html',
  styleUrls: ['./add-fonds.component.css']
})
export class AddFondsComponent implements OnInit {

  demandeNormalForm;
  somme:number;
  guichitier;
  coffreForm;

    constructor( private receveurService: ReceveurService, private router: Router) { }

    ngOnInit(): void {
      
      const user = JSON.parse(localStorage.getItem("userConnected")) || [];
this.coffreForm= new FormGroup({
  Agent:new FormControl(user.nom),
  type:new FormControl('création de la coffre'),
  date:new FormControl(Date.now()),
});
      this.demandeNormalForm= new FormGroup({
        // historique: new FormArray([]),
        DT50: new FormControl(0),
        DT20: new FormControl(0),
        DT10: new FormControl(0),
        DT5: new FormControl(0),
        DT5P:new FormControl(0),
        DT2: new FormControl(0),
        DT1: new FormControl(0),
        DT05: new FormControl(0),
        DT02: new FormControl(0),
        DT01: new FormControl(0),
        DT005: new FormControl(0),
        DT002: new FormControl(0),
        DT001: new FormControl(0),
      

          USD: new FormControl(0),
          EUR: new FormControl(0),
          SAR: new FormControl(0),
          CAD: new FormControl(0),
          DKK: new FormControl(0),
          AED: new FormControl(0),
          JPY: new FormControl(0),
          KWD: new FormControl(0),
          NOK: new FormControl(0),
          GBP: new FormControl(0),
          QAR: new FormControl(0),
          SEK: new FormControl(0),
          CHF: new FormControl(0),
          BHD: new FormControl(0),
          LYD: new FormControl(0),
     


    })



    }
    demandeFondsForm() {
      if (this.demandeNormalForm.invalid) {
        return;
      }
      this.somme=(this.demandeNormalForm.value.DT50*50)+(this.demandeNormalForm.value.DT20*20)+(this.demandeNormalForm.value.DT10*10)+(this.demandeNormalForm.value.DT5*5)+(this.demandeNormalForm.value.DT5P*5)+(this.demandeNormalForm.value.DT1*1)+(this.demandeNormalForm.value.DT05*0.5)+(this.demandeNormalForm.value.DT02*0.2)+(this.demandeNormalForm.value.DT01*0.1)+(this.demandeNormalForm.value.DT005*0.05)+(this.demandeNormalForm.value.DT002*0.02)+(this.demandeNormalForm.value.DT001*0.01)
      this.demandeNormalForm.addControl('montant',new FormControl(this.somme));
      this.receveurService.alimCoffre(this.demandeNormalForm.value,this.coffreForm.value)

     
     
    }
}
