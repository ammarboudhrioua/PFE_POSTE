import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReceveurService } from 'src/app/services/receveur/receveur.service';

@Component({
  selector: 'app-chargement',
  templateUrl: './chargement.component.html',
  styleUrls: ['./chargement.component.css']
})
export class ChargementComponent implements OnInit {
  rechargeDabForm;
  user
  constructor(private receveurService: ReceveurService, private router:Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("userConnected")) || [];
    this.rechargeDabForm= new FormGroup({
      Agent:new FormControl(this.user.nom),
      DT50: new FormControl(0),
      DT20: new FormControl(0),
      DT10: new FormControl(0),
      })
  }
  valide(){
    if (this.rechargeDabForm.invalid) {
      return ;  
    }
    else{
      this.rechargeDabForm.addControl('date',new FormControl(Date.now()))
      this.rechargeDabForm.addControl('type',new FormControl("recharge DAB"))
      this.rechargeDabForm.addControl('montant',new FormControl((this.rechargeDabForm.value.DT50*50)+(this.rechargeDabForm.value.DT20*20)+(this.rechargeDabForm.value.DT10*10)))
      this.receveurService.addDab(this.rechargeDabForm.value).subscribe()
    this.receveurService.addHistorique(this.rechargeDabForm.value).subscribe()
    this.router.navigateByUrl('/receveur')
      
    }
  }
}
