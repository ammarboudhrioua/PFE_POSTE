import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-list-receveurs',
  templateUrl: './list-receveurs.component.html',
  styleUrls: ['./list-receveurs.component.css']
})
export class ListReceveursComponent implements OnInit {
  receveurs=[];
  nom:String;
  matricule:String;
  fpassword:String;
  displayedColumns: string[] ;
    dataSource;
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.receveurs=this.adminService.listReceveurs();
    this.displayedColumns= ['nom', 'matricule', 'fpassword']
    this.dataSource = new MatTableDataSource(this.receveurs)
    console.log(this.dataSource);
    
  }


    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

}
}