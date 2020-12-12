import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuichitierService } from 'src/app/services/guichitier/guichitier.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  fonds: Array<any> = [];
  constructor(private guichtierService: GuichitierService,  private route: Router) { }

  ngOnInit(): void {
    this.fonds=this.guichtierService.listFonds().reverse();
  }

}
