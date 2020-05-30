import { TestBed } from '@angular/core/testing';

import { ResumeDetailServiceService } from './resume-detail-service.service';

describe('ResumeDetailServiceService', () => {
  let service: ResumeDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
