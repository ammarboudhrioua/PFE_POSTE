import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
notifications;
user=JSON.parse(localStorage.getItem("userConnected")) || [];
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.notifications=this.authService.notifications().notifications;
    console.log(this.user.poste);
    
  }
  poste(){
    if(this.user.poste=="Adminstrateur"){
    return true
  }
  else return false
}

}
