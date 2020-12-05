import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeNormalComponent } from './demande-normal.component';

describe('DemandeNormalComponent', () => {
  let component: DemandeNormalComponent;
  let fixture: ComponentFixture<DemandeNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeNormalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
