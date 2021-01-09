import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReceveurService } from 'src/app/services/receveur/receveur.service';
import { NouveauCoffreComponent } from '../nouveau-coffre/nouveau-coffre.component';

@Component({
  selector: 'app-add-coffre',
  templateUrl: './add-coffre.component.html',
  styleUrls: ['./add-coffre.component.css']
})
export class AddCoffreComponent implements OnInit {
  matriculeCoffre = new FormControl('');
  constructor(public dialog: MatDialog,  private receveurService:ReceveurService, private router: Router) { }

  openDialog() {
    const dialogRef = this.dialog.open(NouveauCoffreComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`dialog result: ${result}`);
    });
  }

  connect(){


  this.receveurService.getCoffre(this.matriculeCoffre.value).subscribe((rep:any) =>{
    if(rep.coff ===null){
          alert("matricule incorect")
        }
        else{
          this.receveurService.addCoffre(this.matriculeCoffre.value)
          this.router.navigate(['/receveur',]);
        }
        
  });


  //   this.receveurService.addCoffre(this.matriculeCoffre.value)
  //   console.log(this.matriculeCoffre.value);
    
  //   this.router.navigate(['/receveur']);
  //  } 
  //   else{
      
  //     alert("matricule incorect")
  //   }


  }
  ngOnInit(): void {
  }

}
