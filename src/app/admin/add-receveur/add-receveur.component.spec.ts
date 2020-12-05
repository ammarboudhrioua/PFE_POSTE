import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReceveurComponent } from './add-receveur.component';

describe('AddReceveurComponent', () => {
  let component: AddReceveurComponent;
  let fixture: ComponentFixture<AddReceveurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReceveurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReceveurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
