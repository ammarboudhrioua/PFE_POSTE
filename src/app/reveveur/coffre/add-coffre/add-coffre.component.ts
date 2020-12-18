import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NouveauCoffreComponent } from '../nouveau-coffre/nouveau-coffre.component';

@Component({
  selector: 'app-add-coffre',
  templateUrl: './add-coffre.component.html',
  styleUrls: ['./add-coffre.component.css']
})
export class AddCoffreComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  
  openDialog() {
    const dialogRef = this.dialog.open(NouveauCoffreComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngOnInit(): void {
  }

}
