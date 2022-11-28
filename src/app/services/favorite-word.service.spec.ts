import { TestBed } from '@angular/core/testing';

import { FavoriteWordService } from './favorite-word.service';

describe('FavoriteWordService', () => {
  let service: FavoriteWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteWordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
