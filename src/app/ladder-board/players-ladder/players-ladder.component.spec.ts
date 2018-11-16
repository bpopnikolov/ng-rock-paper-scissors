import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersLadderComponent } from './players-ladder.component';

describe('PlayersLadderComponent', () => {
  let component: PlayersLadderComponent;
  let fixture: ComponentFixture<PlayersLadderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersLadderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersLadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
