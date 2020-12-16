import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chargement',
  templateUrl: './chargement.component.html',
  styleUrls: ['./chargement.component.css']
})
export class ChargementComponent implements OnInit {
  rechargeDabForm;
  constructor() { }

  ngOnInit(): void {
    this.rechargeDabForm= new FormGroup({
      typefonds: new FormControl('recharge DAB'),
      date: new FormControl(Date.now()),
      DT50: new FormControl(),
      DT20: new FormControl(),
      DT10: new FormControl(),
      })

  }
}
