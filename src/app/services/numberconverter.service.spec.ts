import { TestBed } from '@angular/core/testing';

import { NumberconverterService } from './numberconverter.service';

describe('NumberconverterService', () => {
  let service: NumberconverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberconverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
