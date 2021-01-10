import { Component, OnInit } from '@angular/core';
import { ReceveurService } from 'src/app/services/receveur/receveur.service';

@Component({
  selector: 'app-guichets',
  templateUrl: './guichets.component.html',
  styleUrls: ['./guichets.component.css']
})
export class GuichetsComponent implements OnInit {
  caisses;
  constructor(private receveurService: ReceveurService) { }

  ngOnInit(): void {
    this.receveurService.listNotification().subscribe((rep)=>{
      console.log(rep['coff']);
      
      this.caisses=rep['coff']
      let c= this.caisses.length
    })
  }

}
