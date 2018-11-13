import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  AbstractControl,
  FormBuilder
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public playerInfoForm: FormGroup;
  public playerName: AbstractControl;

  constructor(private fb: FormBuilder, private router: Router) {}

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
      this.router.navigate(['/game']);
    }
  }
}
