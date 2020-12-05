import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersementClientComponent } from './versement-client.component';

describe('VersementClientComponent', () => {
  let component: VersementClientComponent;
  let fixture: ComponentFixture<VersementClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersementClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersementClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
