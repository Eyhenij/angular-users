import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {authReducer} from './auth.reducer';
import {AUTH_FEATURE_NODE} from '../app.store';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './auth.effects';
import {AuthService} from '../services/auth.service';


@NgModule({
    providers: [AuthService],
    imports: [
        CommonModule,
        StoreModule.forFeature(AUTH_FEATURE_NODE, authReducer),
        EffectsModule.forFeature([AuthEffects])
    ]
})
export class AuthStoreModule {}
