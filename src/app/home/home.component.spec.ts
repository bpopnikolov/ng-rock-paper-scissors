import { Location } from '@angular/common';
import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { AppMaterialModule } from '../app-material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  ReactiveFormsModule,
  FormGroup,
  AbstractControl
} from '@angular/forms';
import { HomeRoutingModule, homeRoutes } from './home-routing.module';
import { RouterModule, Router } from '@angular/router';
import { AppRoutingModule, appRoutes } from '../app-routing.module';
import { PageNotFoundComponent } from '../shared/components/page-not-found';
import { ComponentsModule } from '../shared/components';
import { PlayerService } from '../shared/services/player/player.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  RouterTestingModule,
  SpyNgModuleFactoryLoader
} from '@angular/router/testing';

import { RpsGameModule } from '../rps-game/rps-game.module';
import { RpsGameComponent } from '../rps-game/rps-game.component';

describe('HomeComponent', () => {
  let loader: SpyNgModuleFactoryLoader;
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;
  let form: FormGroup;
  let nameField: AbstractControl;
  let service: PlayerService;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        BrowserAnimationsModule,
        ComponentsModule,
        AppMaterialModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        RpsGameModule,
        RouterTestingModule.withRoutes([
          ...homeRoutes,
          { path: 'game', component: RpsGameComponent }
        ])
      ],
      providers: [PlayerService, Location, SpyNgModuleFactoryLoader]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    loader = TestBed.get(SpyNgModuleFactoryLoader);
    router = TestBed.get(Router);
    service = TestBed.get(PlayerService);
    location = TestBed.get(Location);

    fixture.detectChanges();
    component.initPlayerNameForm();

    form = component.playerInfoForm;
    nameField = component.playerName;
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form', () => {
    expect(form).toBeTruthy();
    expect(nameField).toBeTruthy();
  });

  it('should submit valid form', fakeAsync(() => {
    nameField.setValue('Pesho');

    component.onSubmit();

    expect(form.invalid).toBeFalsy();
    expect(nameField.value).toBe('Pesho');
    expect(service.playerName).toBe('Pesho');
    tick();
    expect(location.path()).toBe('/game');
  }));
});
