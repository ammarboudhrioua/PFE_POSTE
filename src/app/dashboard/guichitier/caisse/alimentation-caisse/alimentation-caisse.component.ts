import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-alimentation-caisse',
  templateUrl: './alimentation-caisse.component.html',
  styleUrls: ['./alimentation-caisse.component.css']
})
export class AlimentationCaisseComponent implements OnInit {
  matriculeCaisse
  constructor() { }

  ngOnInit(): void {
    this.matriculeCaisse = new FormControl('');
  }

}
