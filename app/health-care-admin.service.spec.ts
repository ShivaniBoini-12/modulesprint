import { TestBed } from '@angular/core/testing';

import { HealthCareAdminService } from './health-care-admin.service';

describe('HealthCareAdminService', () => {
  let service: HealthCareAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthCareAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
