import { TestBed } from '@angular/core/testing';

import { ListGuard } from './list.guard';

describe('ListGuardGuard', () => {
  let guard: ListGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
