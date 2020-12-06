import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GuichitierService } from 'src/app/services/guichitier/guichitier.service';

@Component({
  selector: 'app-versement-client',
  templateUrl: './versement-client.component.html',
  styleUrls: ['./versement-client.component.css']
})
export class VersementClientComponent implements OnInit {
  versementClientFrom;
  montant;
  natureMvt='Nature du mouvement:';
  fonds=[];
  
    constructor(private guichitierService: GuichitierService, private router: Router) { }
  
    ngOnInit(): void {
      this.versementClientFrom= new FormGroup({
        typefonds: new FormControl('versement pour Client'),
        date: new FormControl(Date.now()),
        status: new FormControl('en attente'),
        nomClient: new FormControl('',Validators.required),
        identité: new FormControl('',Validators.required),
        natureMvt: new FormControl('',Validators.required),
      })
      this.montant= new FormControl('',Validators.required)
      
    }
  
  demandeFondsForm() {
    if (this.versementClientFrom.invalid) {
      return;
    }
    console.log(this.montant.value);
    this.versementClientFrom.addControl('montant',new FormControl(this.montant.value));
    this.guichitierService.addDemande(this.versementClientFrom.value);
    console.log(this.versementClientFrom.value);
    this.router.navigateByUrl('/guichitier');
    
  }
  }