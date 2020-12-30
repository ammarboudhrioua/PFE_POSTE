import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceveurService } from 'src/app/services/receveur/receveur.service';

@Component({
  selector: 'app-index-r',
  templateUrl: './index-r.component.html',
  styleUrls: ['./index-r.component.css']
})
export class IndexRComponent implements OnInit {
id;
 coffre;   
 coffreForm;
  constructor(private receveurService : ReceveurService, private router: ActivatedRoute) { }

  ngOnInit(): void {
 
    this.coffre=this.receveurService.coffre();
    this.coffreForm= new FormGroup({
      matriculeCoffre: new FormControl(),
      details: new FormGroup({
      DT50: new FormControl(this.coffre.details.DT50),
      DT20: new FormControl(this.coffre.details.DT20),
      DT10: new FormControl(this.coffre.details.DT10),
      DT5: new FormControl(this.coffre.details.DT5),
      DT5P:new FormControl(this.coffre.details.DT5P),
      DT2: new FormControl(this.coffre.details.DT2),
      DT1: new FormControl(this.coffre.details.DT1),
      DT05: new FormControl(this.coffre.details.DT05),
      DT02: new FormControl(this.coffre.details.DT02),
      DT01: new FormControl(this.coffre.details.DT01),
      DT005: new FormControl(this.coffre.details.DT005),
      DT002: new FormControl(this.coffre.details.DT002),
      DT001: new FormControl(this.coffre.details.DT001),
        USD: new FormControl(this.coffre.details.devise.USD),
        EUR: new FormControl(this.coffre.details.devise.EUR),
        SAR: new FormControl(this.coffre.details.devise.SAR),
        CAD: new FormControl(this.coffre.details.devise.CAD),
        DKK: new FormControl(this.coffre.details.devise.DKK),
        AED: new FormControl(this.coffre.details.devise.AED),
        JPY: new FormControl(this.coffre.details.devise.JPY),
        KWD: new FormControl(this.coffre.details.devise.KWD),
        NOK: new FormControl(this.coffre.details.devise.NOK),
        GBP: new FormControl(this.coffre.details.devise.GBP),
        QAR: new FormControl(this.coffre.details.devise.QAR),
        SEK: new FormControl(this.coffre.details.devise.SEK),
        CHF: new FormControl(this.coffre.details.devise.CHF),
        BHD: new FormControl(this.coffre.details.devise.BHD),
        LYD: new FormControl(this.coffre.details.devise.LYD),
    })

  })
  }

}
