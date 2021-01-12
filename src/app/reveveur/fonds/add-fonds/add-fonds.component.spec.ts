import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFondsComponent } from './add-fonds.component';

describe('AddFondsComponent', () => {
  let component: AddFondsComponent;
  let fixture: ComponentFixture<AddFondsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFondsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
