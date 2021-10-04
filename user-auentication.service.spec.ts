import { TestBed } from '@angular/core/testing';

import { UserAuenticationService } from './user-auentication.service';

describe('UserAuenticationService', () => {
  let service: UserAuenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAuenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
