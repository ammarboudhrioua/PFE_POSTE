import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReceveursComponent } from './list-receveurs.component';

describe('ListReceveursComponent', () => {
  let component: ListReceveursComponent;
  let fixture: ComponentFixture<ListReceveursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReceveursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReceveursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
