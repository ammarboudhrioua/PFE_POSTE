import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReceveurService } from 'src/app/services/receveur/receveur.service';

@Component({
  selector: 'app-add-caisse',
  templateUrl: './add-caisse.component.html',
  styleUrls: ['./add-caisse.component.css']
})
export class AddCaisseComponent implements OnInit {
  matriculeCaisse;
  coffre;
  constructor(private receveurService: ReceveurService) { }

  ngOnInit(): void {
    console.log(this.coffre);
    
  this.matriculeCaisse = new FormControl('');
}
createCaisse(){
  const newCoffre = JSON.parse(localStorage.getItem("coffres")) || [];
  const coffre=this.receveurService.coffre()
  coffre['caisses'].push(this.matriculeCaisse)
}
}
