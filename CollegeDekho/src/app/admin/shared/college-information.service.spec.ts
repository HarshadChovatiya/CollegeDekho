import { TestBed } from '@angular/core/testing';

import { CollegeInformationService } from './college-information.service';

describe('CollegeInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollegeInformationService = TestBed.get(CollegeInformationService);
    expect(service).toBeTruthy();
  });
});
