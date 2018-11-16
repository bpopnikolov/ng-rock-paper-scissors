import { TestBed } from '@angular/core/testing';

import { RpsGameService } from './rps-game.service';

describe('RpsGameService', () => {
  let service: RpsGameService = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RpsGameService]
    });

    service = TestBed.get(RpsGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return true if players item is higher than opponents', () => {
    const playerItem = 3;
    const opponentItem = 2;

    const isWinner = service.doesBeat(playerItem, opponentItem);

    expect(isWinner).toBeTruthy();
  });

  it('should return null if both players pick the same item', () => {
    const playerItem = 3;
    const opponentItem = 3;

    const isDraw = service.doesBeat(playerItem, opponentItem);

    expect(isDraw).toBeNull();
  });

  it('should return false if opponent has higher item than player', () => {
    const playerItem = 2;
    const opponentItem = 3;

    const isLoss = service.doesBeat(playerItem, opponentItem);

    expect(isLoss).toBeFalsy();
  });
});
