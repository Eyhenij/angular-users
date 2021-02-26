import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as profileActions from './profile.actions';
import {catchError, map, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {ProfileService} from '../services/profile.service';


@Injectable()
export class ProfileEffects {

    setProfileData$ = createEffect(() => this._actions
        .pipe(
            ofType(profileActions.setProfileDataAction),
            tap(({profile}): void => this._profileService.setProfileData(profile)),
            map(({profile}): Action => profileActions.setProfileDataActionSuccess({profile})),
            catchError((err: Error): Observable<Action> => of(
                profileActions.setProfileDataActionFailure({message: err.message}))
            )
        )
    );

    constructor(
        private _actions: Actions,
        private _profileService: ProfileService
    ) {}
}
