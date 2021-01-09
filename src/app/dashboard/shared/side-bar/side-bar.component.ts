import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
receveur=false;
guichitier=false;
admin=false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  const user = JSON.parse(localStorage.getItem("userConnected")) || [];
  if(user.poste==='Receveur'){
    this.receveur=true
  }
  else{
    if(user.poste==='Agent de Guichet'){
      this.guichitier=true
    }
  
  else{
    if(user.poste==='Adminstrateur'){
      this.admin=true
    }

  }
}
}
}
