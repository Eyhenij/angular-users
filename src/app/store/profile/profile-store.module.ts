import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {profileReducer} from './profile.reducer';
import {PROFILE_FEATURE_NODE} from '../app.store';
import {ProfileEffects} from './profile.effects';


@NgModule({
  imports: [
      CommonModule,
      StoreModule.forFeature(PROFILE_FEATURE_NODE, profileReducer),
      EffectsModule.forFeature([ProfileEffects])
  ]
})
export class ProfileStoreModule {}
