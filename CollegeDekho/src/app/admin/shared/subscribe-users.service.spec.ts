import { TestBed } from '@angular/core/testing';

import { SubscribeUsersService } from './subscribe-users.service';

describe('SubscribeUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubscribeUsersService = TestBed.get(SubscribeUsersService);
    expect(service).toBeTruthy();
  });
});
