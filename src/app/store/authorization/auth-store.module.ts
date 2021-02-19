import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {AUTH_FEATURE_NODE, authReducer} from './auth.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './auth.effects';


@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(AUTH_FEATURE_NODE, authReducer),
        EffectsModule.forFeature([AuthEffects])
    ]
})
export class AuthStoreModule {}