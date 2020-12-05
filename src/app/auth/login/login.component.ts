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
      matricule: new FormControl('',Validators.required),
      password: new FormControl('',[Validators.required,Validators.minLength(8)])
    }
    );
  }
  submitForm() {
    this.submitted=true;
    if (this.loginForm.invalid) {
      return;
    }
    if(this.authService.login(this.loginForm.value)){
      this.router.navigateByUrl('/admin')
    }

}
}
