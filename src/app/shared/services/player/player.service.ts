import { pipe } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class PlayerService {
  private $playerName = new BehaviorSubject<string>('');
  public playerNameHasChanged = this.$playerName
    .asObservable()
    .pipe(distinctUntilChanged());

  constructor() {}

  get playerName() {
    return this.$playerName.value;
  }

  set playerName(name) {
    this.$playerName.next(name);
  }

  public playerHasName(): boolean {
    return this.$playerName.value ? true : false;
  }
}
