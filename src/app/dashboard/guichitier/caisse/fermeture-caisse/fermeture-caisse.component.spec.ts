import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FermetureCaisseComponent } from './fermeture-caisse.component';

describe('FermetureCaisseComponent', () => {
  let component: FermetureCaisseComponent;
  let fixture: ComponentFixture<FermetureCaisseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FermetureCaisseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FermetureCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
