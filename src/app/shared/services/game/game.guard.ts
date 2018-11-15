import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { PlayerService } from '../player/player.service';

@Injectable()
export class CanActivateGameGuard implements CanActivate {
  constructor(private playerService: PlayerService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.playerService.playerHasName()) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
