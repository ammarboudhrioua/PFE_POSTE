import { Component, OnInit } from '@angular/core';
import { ReceveurService } from 'src/app/services/receveur/receveur.service';

@Component({
  selector: 'app-list-caisses',
  templateUrl: './list-caisses.component.html',
  styleUrls: ['./list-caisses.component.css']
})
export class ListCaissesComponent implements OnInit {
caisses
  constructor(private receveurService: ReceveurService) { }

  ngOnInit(): void {
    this.receveurService.listCaisses().subscribe((rep)=>{
      
      this.caisses=rep['caisse']
      let c= this.caisses.length
    })
  }

}
