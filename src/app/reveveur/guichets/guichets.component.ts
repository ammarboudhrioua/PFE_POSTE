import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReceveurService } from 'src/app/services/receveur/receveur.service';


export interface Owner{
  typedemande : String,
  matricule :String,
  date : String,
  montant:String,
  status:String
}

@Component({
  selector: 'app-guichets',
  templateUrl: './guichets.component.html',
  styleUrls: ['./guichets.component.css']
})
export class GuichetsComponent implements OnInit {
  caisses;


  public displayedColumns = ['typedemande','matricule', 'date','montant','status','favoris'];
  public dataSource = new MatTableDataSource<Owner>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private receveurService: ReceveurService) { }

  ngOnInit(): void {

  

    this.receveurService.listNotification().subscribe((rep)=>{
      this.dataSource.data = rep['coff'] as Owner[];
    
    })
  }

}
