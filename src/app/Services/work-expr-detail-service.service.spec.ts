import { TestBed } from '@angular/core/testing';

import { WorkExprDetailServiceService } from './work-expr-detail-service.service';

describe('WorkExprDetailServiceService', () => {
  let service: WorkExprDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkExprDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
