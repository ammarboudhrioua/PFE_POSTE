import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demande-normal',
  templateUrl: './demande-normal.component.html',
  styleUrls: ['./demande-normal.component.css']
})
export class DemandeNormalComponent implements OnInit {
demandeNormalForm;
somme:number =50;
monnaies:Array<number>=[
  50,
  20,
  10,
  5,
  2,
  1,
  0.5,
  0.2,
  0.1,
  0.05,
  0.02,
  0.01,
]
  constructor() { }

  ngOnInit(): void {
    console.log(this.monnaies);
    this.demandeNormalForm= new FormGroup({
      50: new FormControl(),
      20: new FormControl(),
      10: new FormControl(0),
      5: new FormControl(0),
      2: new FormControl(0),
      1: new FormControl(0),
      0.5: new FormControl(0),
      0.2: new FormControl(0),
      0.1: new FormControl(0),
      0.05: new FormControl(0),
      0.02: new FormControl(0),
      0.01: new FormControl(0),
    })
    console.log(this.demandeNormalForm.value);
    
  }
  // onKey(e:Number) {
  //   this.demandeNormalForm += parseIn(e.value ;
  // }
 
   
}
