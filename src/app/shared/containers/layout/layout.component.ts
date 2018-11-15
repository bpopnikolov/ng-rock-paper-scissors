import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player/player.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public playerName: string;

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.playerService.playerNameHasChanged.subscribe(
      name => (this.playerName = name)
    );
  }
}
