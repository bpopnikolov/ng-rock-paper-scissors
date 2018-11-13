import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../side-nav/shared/side-nav.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  constructor(private snavService: SideNavService) {}

  ngOnInit() {}

  public toggleSideNav(): void {
    this.snavService.toggleSideNav();
  }
}
