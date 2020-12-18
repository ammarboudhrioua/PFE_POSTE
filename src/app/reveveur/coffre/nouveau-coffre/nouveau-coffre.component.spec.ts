import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauCoffreComponent } from './nouveau-coffre.component';

describe('NouveauCoffreComponent', () => {
  let component: NouveauCoffreComponent;
  let fixture: ComponentFixture<NouveauCoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauCoffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauCoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
