import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GuichitierService } from 'src/app/services/guichitier/guichitier.service';

@Component({
  selector: 'app-alimentation-caisse',
  templateUrl: './alimentation-caisse.component.html',
  styleUrls: ['./alimentation-caisse.component.css']
})
export class AlimentationCaisseComponent implements OnInit {
  matriculeCaisse = new FormControl('');
  constructor(private guichitierService: GuichitierService , private router: Router) { }

  ngOnInit(): void {
 
     
          
  
  }
  connect(){
  this.guichitierService.getCaisse(this.matriculeCaisse.value).subscribe((rep:any) =>{
    if(rep.Coffre ===null){
      alert("matricule incorect")
    }
    else{
      this.guichitierService.addCaisse(rep.Coffre._id)
      this.router.navigate(['/guichitier']);
    }
  });
  }

}
