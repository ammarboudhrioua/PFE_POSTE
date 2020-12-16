import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCoffreComponent } from './update-coffre.component';

describe('UpdateCoffreComponent', () => {
  let component: UpdateCoffreComponent;
  let fixture: ComponentFixture<UpdateCoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCoffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
