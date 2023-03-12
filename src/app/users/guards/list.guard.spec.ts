import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListGuard } from './list.guard';

describe('ListGuard', () => {
  let guard: ListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ListGuard]
    });
    guard = TestBed.inject(ListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
