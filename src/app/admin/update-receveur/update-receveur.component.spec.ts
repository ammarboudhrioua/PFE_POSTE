import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReceveurComponent } from './update-receveur.component';

describe('UpdateReceveurComponent', () => {
  let component: UpdateReceveurComponent;
  let fixture: ComponentFixture<UpdateReceveurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReceveurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReceveurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
