import { Component, OnInit, ViewChild } from '@angular/core';
import { SideNavService } from './shared/side-nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @ViewChild('snav') private snav: any;

  constructor(private snavService: SideNavService) {}

  ngOnInit() {
    this.snavService.setSideNav(this.snav);
  }
}
