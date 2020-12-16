import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ReceveurService } from 'src/app/services/receveur/receveur.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
historique;
mouvements:String;
type:String;
date:Date;
montant:Number;
displayedColumns: string[] ;
dataSource;
  constructor(private receveurService: ReceveurService) { }

  ngOnInit(): void {
    this.historique=this.receveurService.historique()
    this.displayedColumns=['mouvements','type','date','montant'];
    this.dataSource = new MatTableDataSource(this.historique)
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
