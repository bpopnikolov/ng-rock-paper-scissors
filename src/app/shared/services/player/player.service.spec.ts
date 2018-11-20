import { TestBed } from '@angular/core/testing';

import { PlayerService } from './player.service';

describe('PlayerService', () => {
  let service: PlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerService]
    });

    service = TestBed.get(PlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set observable $playerName value', () => {
    const dummyName = 'Pesho';
    service.playerName = dummyName;
    const hasName = service.playerHasName();

    expect(service.playerName).toBe(dummyName);
    service.playerNameHasChanged.subscribe(value => {
      expect(value).toBe(dummyName);
    });
    expect(hasName).toBeTruthy();
  });

  it('should not set Observable $playerName', () => {
    const hasName = service.playerHasName();

    expect(service.playerName).toBe('');
    service.playerNameHasChanged.subscribe(value => {
      expect(value).toBe('');
    });
    expect(hasName).toBeFalsy();
  });
});
