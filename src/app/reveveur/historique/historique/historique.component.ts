import { Component, OnInit } from '@angular/core';
import { ReceveurService } from 'src/app/services/receveur/receveur.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
historique;
Agent:String;
type:String;
date:Date;
montant:Number;
displayedColumns: string[] ;
dataSource;
  constructor(private receveurService: ReceveurService) { }

  ngOnInit(): void {
    this.receveurService.coffre().subscribe((rep:any) =>{
      this.historique=rep.coff.historique.reverse();
      console.log(this.historique);
      this.displayedColumns=['Agent','type','date','montant'];
      this.dataSource =this.historique
    });
  }

}
