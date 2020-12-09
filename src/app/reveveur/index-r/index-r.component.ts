import { Component, OnInit } from '@angular/core';
import { ReceveurService } from 'src/app/services/receveur/receveur.service';

@Component({
  selector: 'app-index-r',
  templateUrl: './index-r.component.html',
  styleUrls: ['./index-r.component.css']
})
export class IndexRComponent implements OnInit {
  x=0;
coffres;
    
 
  constructor(private receveurService : ReceveurService) { }

  ngOnInit(): void {
 
    this.coffres=this.receveurService.coffre();
  }

}
