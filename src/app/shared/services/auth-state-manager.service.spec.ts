import { TestBed } from '@angular/core/testing';

import { AuthStateManagerService } from './auth-state-manager.service';

describe('AuthStateManagerService', () => {
  let service: AuthStateManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthStateManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
