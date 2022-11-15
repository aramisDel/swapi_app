import { TestBed } from '@angular/core/testing';

import { CharacterDetailsGuard } from './character-details.guard';

describe('CharacterDetailsGuard', () => {
  let guard: CharacterDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CharacterDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
