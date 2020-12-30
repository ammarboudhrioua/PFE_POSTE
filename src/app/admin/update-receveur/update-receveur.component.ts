import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-update-receveur',
  templateUrl: './update-receveur.component.html',
  styleUrls: ['./update-receveur.component.css']
})
export class UpdateReceveurComponent implements OnInit {
  userForm;
  save=true;
  constructor(  private route: Router, public dialogRef :MatDialogRef<UpdateReceveurComponent>,
    private adminService: AdminService,
   @Inject(MAT_DIALOG_DATA)public data: any) { }

   ngOnInit(): void {
    this.userForm= new FormGroup({
      poste: new FormControl('',Validators.required),
      matricule: new FormControl('',[Validators.required,Validators.min(1000000)]),
      nom:new FormControl('',Validators.required),
     email:new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
    })
  

   this.adminService.getUserbyid( this.data.id).subscribe((response:any) => {
     console.log(response.user);
     
      this.userForm.patchValue(response.user);
   }
   )
  }

  saveUpdate() {

    this.save = true;
    if (this.userForm.invalid) {
      return;
    }else
    {
      this.adminService.updateUser( this.data.id,this.userForm.value);
    }
  }

}