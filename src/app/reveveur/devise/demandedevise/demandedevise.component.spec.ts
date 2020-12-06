import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandedeviseComponent } from './demandedevise.component';

describe('DemandedeviseComponent', () => {
  let component: DemandedeviseComponent;
  let fixture: ComponentFixture<DemandedeviseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandedeviseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandedeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
