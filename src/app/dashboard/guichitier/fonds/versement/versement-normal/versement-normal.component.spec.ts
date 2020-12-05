import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersementNormalComponent } from './versement-normal.component';

describe('VersementNormalComponent', () => {
  let component: VersementNormalComponent;
  let fixture: ComponentFixture<VersementNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersementNormalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersementNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
