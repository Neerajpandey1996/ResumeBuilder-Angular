import { TestBed } from '@angular/core/testing';

import { AddressDetailServiceService } from './address-detail-service.service';

describe('AddressDetailServiceService', () => {
  let service: AddressDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
