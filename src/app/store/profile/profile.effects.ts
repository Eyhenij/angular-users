import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as profileActions from './profile.actions';
import {catchError, map, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {ProfileService} from '../services/profile.service';
import {PostsService} from '../services/posts.service';


@Injectable()
export class ProfileEffects {

    setProfileData$ = createEffect(() => this._actions
        .pipe(
            ofType(profileActions.setProfileDataAction),
            tap(({profile}): void => this._profileService.setProfileData(profile)),
            map(({profile}): Action => profileActions.setProfileDataActionSuccess({profile})),
            catchError((err: Error): Observable<Action> => of(
                profileActions.setProfileDataActionFailure({message: err.message, success: false}))
            )
        )
    );

    constructor(
        private readonly _actions: Actions,
        private readonly _profileService: ProfileService,
        private readonly _postsService: PostsService
    ) {}
}
