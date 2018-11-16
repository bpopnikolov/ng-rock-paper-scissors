import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatTab } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { PlayersLadderService } from 'src/app/shared/services/ladder/players-ladder.service';
import { Player } from 'src/app/shared/models';

@Component({
  selector: 'app-players-ladder',
  templateUrl: './players-ladder.component.html',
  styleUrls: ['./players-ladder.component.scss']
})
export class PlayersLadderComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['position', 'playerName', 'score'];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  public sub: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private plService: PlayersLadderService) {}

  ngOnInit() {
    this.sub = this.plService.getPlayersLadder().subscribe((data: Player[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
