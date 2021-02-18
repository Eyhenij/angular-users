import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {AUTH_FEATURE_NAME, authReducer} from './reducers/auth.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './effects/auth.effects';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature(AUTH_FEATURE_NAME, authReducer),
        EffectsModule.forFeature([AuthEffects])
    ]
})
export class AuthStoreModule {}
