import { TestBed } from '@angular/core/testing';

import { EducationDetailServiceService } from './education-detail-service.service';

describe('EducationDetailServiceService', () => {
  let service: EducationDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
