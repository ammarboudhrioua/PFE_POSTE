import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteSupplimentaireComponent } from './recette-supplimentaire.component';

describe('RecetteSupplimentaireComponent', () => {
  let component: RecetteSupplimentaireComponent;
  let fixture: ComponentFixture<RecetteSupplimentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetteSupplimentaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteSupplimentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
