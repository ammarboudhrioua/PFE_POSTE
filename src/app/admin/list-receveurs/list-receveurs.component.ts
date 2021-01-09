import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/services/admin/admin.service';
import { UpdateReceveurComponent } from '../update-receveur/update-receveur.component';

export interface  users{
  poste:String;
  nom:String;
  matricule:String;
  password:String;
  email:String;
 
}
@Component({
  selector: 'app-list-receveurs',
  templateUrl: './list-receveurs.component.html',
  styleUrls: ['./list-receveurs.component.css']
})


export class ListReceveursComponent implements OnInit {
 

  displayedColumns= ['poste','nom', 'matricule', 'password','update','delete']
  public dataSource = new MatTableDataSource<users>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private adminService: AdminService, public dialog: MatDialog) { }
  
  ngOnInit(): void {
   
    this.adminService.listUsers().subscribe((response:any) => {
     this.dataSource.data=response.user as users[];
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.adminService.listUsers().subscribe((response:any) => {
      this.dataSource.data=response.user as users[];
     });
  }


    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

}
Update(id): void {
  const dialogRef = this.dialog.open(UpdateReceveurComponent, {
    data :{'id':id}
});
this.ngAfterViewInit()
}
Delete (id) {
  this.adminService.deleteUser(id).subscribe(
    (msg) => console.log(msg),
    (error) => console.log(error),
    ()=>{
      this.ngAfterViewInit()
    }

  );
 

  }
}