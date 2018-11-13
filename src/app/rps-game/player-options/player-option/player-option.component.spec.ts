import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerOptionComponent } from './player-option.component';

describe('PlayerOptionComponent', () => {
  let component: PlayerOptionComponent;
  let fixture: ComponentFixture<PlayerOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
