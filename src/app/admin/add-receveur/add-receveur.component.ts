import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-add-receveur',
  templateUrl: './add-receveur.component.html',
  styleUrls: ['./add-receveur.component.css']
})
export class AddReceveurComponent implements OnInit {
  poste='Poste dAgent :';
  submitted=false;
  userForm;
  constructor(private adminService: AdminService, private router:Router) { }

  ngOnInit(): void {
    this.userForm= new FormGroup({
      poste: new FormControl('',Validators.required),
      nom:new FormControl('',Validators.required),
      matricule: new FormControl('',[Validators.required,Validators.min(1000000)]),
      fpassword: new FormControl('',Validators.required),
      cpassword: new FormControl('',Validators.required)
    })
  }

  submitForm() {
    this.submitted=true;
    if (this.userForm.invalid) {
      return ;  
    }
    this.adminService.addUser(this.userForm.value);
    this.router.navigateByUrl('/admin')
  }
}
