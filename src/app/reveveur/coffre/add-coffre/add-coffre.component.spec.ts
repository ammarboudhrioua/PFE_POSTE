import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoffreComponent } from './add-coffre.component';

describe('AddCoffreComponent', () => {
  let component: AddCoffreComponent;
  let fixture: ComponentFixture<AddCoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCoffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
