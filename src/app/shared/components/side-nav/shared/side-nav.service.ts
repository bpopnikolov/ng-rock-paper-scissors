import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  private sideNave: any;

  constructor() {}

  public setSideNav(snavElement): void {
    this.sideNave = snavElement;
  }
  public toggleSideNav(): void {
    this.sideNave.toggle();
  }
}
