import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DABComponent } from './dab.component';

describe('DABComponent', () => {
  let component: DABComponent;
  let fixture: ComponentFixture<DABComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DABComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DABComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
