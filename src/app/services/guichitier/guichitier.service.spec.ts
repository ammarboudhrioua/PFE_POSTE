import { TestBed } from '@angular/core/testing';

import { GuichitierService } from './guichitier.service';

describe('GuichitierService', () => {
  let service: GuichitierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuichitierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
