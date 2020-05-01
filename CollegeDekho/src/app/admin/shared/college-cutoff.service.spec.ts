import { TestBed } from '@angular/core/testing';

import { CollegeCutoffService } from './college-cutoff.service';

describe('CollegeCutoffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollegeCutoffService = TestBed.get(CollegeCutoffService);
    expect(service).toBeTruthy();
  });
});
