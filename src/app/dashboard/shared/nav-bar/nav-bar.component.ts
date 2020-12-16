import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NotificationsComponent } from '../notifications/notifications.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
user=JSON.parse(localStorage.getItem('userConnected'))||[];
  constructor(private authService: AuthService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.user);
    
    
  }
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login')
  }
  openDialog() {
    const dialogRef = this.dialog.open(NotificationsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
