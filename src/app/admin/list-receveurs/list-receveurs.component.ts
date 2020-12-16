import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-list-receveurs',
  templateUrl: './list-receveurs.component.html',
  styleUrls: ['./list-receveurs.component.css']
})
export class ListReceveursComponent implements OnInit {
  users=[];
  poste:String;
  nom:String;
  matricule:String;
  fpassword:String;
  displayedColumns: string[] ;
    dataSource;
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.users=this.adminService.listUsers();
    this.displayedColumns= ['poste','nom', 'matricule', 'fpassword']
    this.dataSource = new MatTableDataSource(this.users)
    
  }


    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

}
}