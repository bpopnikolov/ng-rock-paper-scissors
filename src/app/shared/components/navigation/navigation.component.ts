import { Component, OnInit, Input } from '@angular/core';
import { SideNavService } from '../side-nav/shared/side-nav.service';
import { PlayerService } from '../../services/player/player.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() public playerName: string;
  constructor(private snavService: SideNavService) {}

  ngOnInit() {}

  public toggleSideNav(): void {
    this.snavService.toggleSideNav();
  }
}
