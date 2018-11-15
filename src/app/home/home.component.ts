import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  AbstractControl,
  FormBuilder
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../shared/services/player/player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public playerInfoForm: FormGroup;
  public playerName: AbstractControl;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private playerService: PlayerService
  ) {}

  public ngOnInit() {
    this.initPlayerNameForm();
  }

  public initPlayerNameForm(): void {
    this.playerInfoForm = this.fb.group({
      playerName: ['', [Validators.required, Validators.maxLength(32)]]
    });
    this.playerName = this.playerInfoForm.controls.playerName;
  }

  public onSubmit(): void {
    if (!this.playerInfoForm.invalid) {
      this.playerService.playerName = this.playerInfoForm.value.playerName;
      this.router.navigate(['/game']);
    }
  }
}
