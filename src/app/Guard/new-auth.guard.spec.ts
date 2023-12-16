import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { newAuthGuard } from './new-auth.guard';

describe('newAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => newAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
