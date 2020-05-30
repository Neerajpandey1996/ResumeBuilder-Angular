import { TestBed } from '@angular/core/testing';

import { OtherDetailServiceService } from './other-detail-service.service';

describe('OtherDetailServiceService', () => {
  let service: OtherDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
