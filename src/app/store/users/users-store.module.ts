import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {UsersEffects} from './users.effects';
import {USERS_FEATURE_NODE} from '../app.store';
import {UsersService} from '../services/users.service';
import {usersReducer} from './users.reducer';


@NgModule({
    providers: [UsersService],
    imports: [
        CommonModule,
        StoreModule.forFeature(USERS_FEATURE_NODE, usersReducer),
        EffectsModule.forFeature([UsersEffects])
    ]
})
export class UsersStoreModule {}
