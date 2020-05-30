import { TestBed } from '@angular/core/testing';

import { SkillDetailServiceService } from './skill-detail-service.service';

describe('SkillDetailServiceService', () => {
  let service: SkillDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
