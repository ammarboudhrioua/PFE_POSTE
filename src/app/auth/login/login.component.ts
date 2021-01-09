import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  submitted:Boolean=false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm= new FormGroup({
      matricule: new FormControl('',[Validators.required,Validators.minLength(6)]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)])
    }
    );
  }
  submitForm() {
    this.submitted=true;
    if (this.loginForm.invalid) {
      return;
    }
  switch(this.authService.login(this.loginForm.value)){ 
   case "Agent de Guichet": { 
    this.router.navigateByUrl('/guichitier') 
      break; 
   } 
   case "Adminstrateur": { 
    this.router.navigateByUrl('/admin')
      break; 
   } 
   case "Receveur": { 
    this.router.navigateByUrl('/add_coffre') 
      break; 
   } 
  } 
  }
}
