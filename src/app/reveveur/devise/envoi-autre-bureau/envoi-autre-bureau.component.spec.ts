import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoiAutreBureauComponent } from './envoi-autre-bureau.component';

describe('EnvoiAutreBureauComponent', () => {
  let component: EnvoiAutreBureauComponent;
  let fixture: ComponentFixture<EnvoiAutreBureauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoiAutreBureauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoiAutreBureauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
