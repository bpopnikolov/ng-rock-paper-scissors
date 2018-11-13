import { TestBed } from '@angular/core/testing';

import { RpsGameService } from './rps-game.service';

describe('RpsGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RpsGameService = TestBed.get(RpsGameService);
    expect(service).toBeTruthy();
  });
});
