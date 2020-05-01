import { TestBed } from '@angular/core/testing';

import { CollegeBranchesService } from './college-branches.service';

describe('CollegeBranchesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollegeBranchesService = TestBed.get(CollegeBranchesService);
    expect(service).toBeTruthy();
  });
});
