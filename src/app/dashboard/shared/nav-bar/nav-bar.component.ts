import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
user=JSON.parse(localStorage.getItem('userConnected'))||[];
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.user);
    
    
  }
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login')
  }

}
