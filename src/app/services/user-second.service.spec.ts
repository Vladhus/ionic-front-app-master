import { TestBed } from '@angular/core/testing';

import { UserSecondService } from './user-second.service';

describe('UserSecondService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserSecondService = TestBed.get(UserSecondService);
    expect(service).toBeTruthy();
  });
});
