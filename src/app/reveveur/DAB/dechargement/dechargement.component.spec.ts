import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DechargementComponent } from './dechargement.component';

describe('DechargementComponent', () => {
  let component: DechargementComponent;
  let fixture: ComponentFixture<DechargementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DechargementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DechargementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
