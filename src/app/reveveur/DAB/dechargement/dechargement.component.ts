import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReceveurService } from 'src/app/services/receveur/receveur.service';

@Component({
  selector: 'app-dechargement',
  templateUrl: './dechargement.component.html',
  styleUrls: ['./dechargement.component.css']
})
export class DechargementComponent implements OnInit {
  dechargeDabForm;
  user
  constructor(private receveurService: ReceveurService, private router:Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("userConnected")) || [];
    this.dechargeDabForm= new FormGroup({
      Agent:new FormControl(this.user.nom),
      DT50: new FormControl(0),
      DT20: new FormControl(0),
      DT10: new FormControl(0),
      })
  }
  valide(){
    if (this.dechargeDabForm.invalid) {
      return ;  
    }
    else{
      this.dechargeDabForm.addControl('date',new FormControl(Date.now()))
      this.dechargeDabForm.addControl('type',new FormControl("Decharge DAB"))
      this.dechargeDabForm.addControl('montant',new FormControl((this.dechargeDabForm.value.DT50*50)+(this.dechargeDabForm.value.DT20*20)+(this.dechargeDabForm.value.DT10*10)))
      this.receveurService.retraitDab(this.dechargeDabForm.value).subscribe()
    this.receveurService.addHistorique(this.dechargeDabForm.value).subscribe()
    this.router.navigateByUrl("/receveur")
      
    }
  }
}
