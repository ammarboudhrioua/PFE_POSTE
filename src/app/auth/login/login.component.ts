import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
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
      matricule: new FormControl('',[Validators.required,Validators.minLength(1)]),
      password: new FormControl('',[Validators.required,Validators.minLength(1)])
    }
    );
  }
  submitForm() {
    this.submitted=true;
    if (this.loginForm.invalid) {
      return;
    }
 this.authService.login(this.loginForm.value).subscribe((response:any) => {
  if (response.token) {
      localStorage.setItem('token',response.token );
     localStorage.setItem('userConnected',JSON.stringify(response.user) );
     this.authService.isLoginSubject.next(true);
    switch(response.user.poste){ 
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
   (error) => console.log(error.message)
  })
 
  
  
  }
}
