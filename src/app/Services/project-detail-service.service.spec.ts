import { TestBed } from '@angular/core/testing';

import { ProjectDetailServiceService } from './project-detail-service.service';

describe('ProjectDetailServiceService', () => {
  let service: ProjectDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
