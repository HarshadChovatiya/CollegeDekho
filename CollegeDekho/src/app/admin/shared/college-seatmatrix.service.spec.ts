import { TestBed } from '@angular/core/testing';

import { CollegeSeatmatrixService } from './college-seatmatrix.service';

describe('CollegeSeatmatrixService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollegeSeatmatrixService = TestBed.get(CollegeSeatmatrixService);
    expect(service).toBeTruthy();
  });
});
