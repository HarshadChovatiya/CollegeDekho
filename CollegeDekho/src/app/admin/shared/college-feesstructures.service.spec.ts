import { TestBed } from '@angular/core/testing';

import { CollegeFeesstructuresService } from './college-feesstructures.service';

describe('CollegeFeesstructuresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollegeFeesstructuresService = TestBed.get(CollegeFeesstructuresService);
    expect(service).toBeTruthy();
  });
});
