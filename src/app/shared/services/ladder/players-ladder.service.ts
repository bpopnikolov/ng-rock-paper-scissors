import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators';
import { Player } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class PlayersLadderService {
  public docRef: firebase.firestore.DocumentReference;
  constructor(private db: AngularFirestore) {}

  public getPlayersLadder(): Observable<Player[]> {
    return this.db
      .collection('players')
      .valueChanges()
      .pipe(
        map((data: Player[]) => {
          return data
            ? data
                .sort((a, b) => b.score - a.score)
                .map((p, i) => {
                  return { position: i, ...p };
                })
            : [];
        })
      );
  }

  public async addPlayerToLadder(player: any): Promise<void> {
    if (this.docRef) {
      this.docRef.update(player);
      console.log(this.docRef);
      return;
    }
    this.docRef = await this.db.collection('players').add(player);
  }
}
