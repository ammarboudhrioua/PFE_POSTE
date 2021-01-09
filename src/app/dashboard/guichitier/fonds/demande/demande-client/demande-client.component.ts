import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GuichitierService } from 'src/app/services/guichitier/guichitier.service';

@Component({
  selector: 'app-demande-client',
  templateUrl: './demande-client.component.html',
  styleUrls: ['./demande-client.component.css']
})
export class DemandeClientComponent implements OnInit {
demandeClientFrom;
montant;
natureMvt='Nature du mouvement:';
guichitier;
  constructor(private guichitierService: GuichitierService, private router: Router) { }

  ngOnInit(): void {
    this.guichitier=this.guichitierService.details();
    this.demandeClientFrom= new FormGroup({
      typedemande: new FormControl('demande pour Client'),
      date: new FormControl(Date.now()),
      status: new FormControl('en attente'),
      nomClient: new FormControl('',Validators.required),
      identité: new FormControl('',Validators.required),
      natureMvt: new FormControl('',Validators.required),
    })
    this.montant= new FormControl(0,Validators.required)
    
  }

demandeFondsForm() {
  if (this.demandeClientFrom.invalid) {
    return;
  }
  this.demandeClientFrom.addControl('montant',new FormControl(this.montant.value));
  // this.demandeClientFrom.addControl('Nom',new FormControl(this.guichitier.nom));
    this.demandeClientFrom.addControl('matricule',new FormControl(this.guichitier.matricule));
    this.guichitierService.addDemande(this.demandeClientFrom.value);
    console.log(this.demandeClientFrom.value);
  // this.router.navigateByUrl('/guichitier');
  
}
}