import { TestBed } from '@angular/core/testing';

import { CollegePlacementService } from './college-placement.service';

describe('CollegePlacementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollegePlacementService = TestBed.get(CollegePlacementService);
    expect(service).toBeTruthy();
  });
});
