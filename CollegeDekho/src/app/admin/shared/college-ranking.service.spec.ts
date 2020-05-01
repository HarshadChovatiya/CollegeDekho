import { TestBed } from '@angular/core/testing';

import { CollegeRankingService } from './college-ranking.service';

describe('CollegeRankingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollegeRankingService = TestBed.get(CollegeRankingService);
    expect(service).toBeTruthy();
  });
});
