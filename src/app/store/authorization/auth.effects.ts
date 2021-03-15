import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {AuthService} from '../services/auth.service';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import * as authActions from './auth.actions';
import {setProfileDataAction} from '../profile/profile.actions';
import {Action} from '@ngrx/store';
import {IServerAuthResponse} from '../../interfaces/server-responses.interface';


@Injectable()
export class AuthEffects {

    login$ = createEffect(() => this._actions$
        .pipe(
            ofType(authActions.loginAction),
            switchMap(({loginName, password}): Observable<IServerAuthResponse> => this._authService.logIn(loginName, password)),
            mergeMap((serverResponse: IServerAuthResponse): Action[] => {
                return [
                    authActions.loginActionSuccess({token: serverResponse.token}),
                    setProfileDataAction({profile: serverResponse.profile})
                ];
            }),
            catchError((err: Error): Observable<Action> => of(
                authActions.loginActionFailure({message: err.message, success: false}))
            )
        )
    );

    loginSuccess$ = createEffect(() => this._actions$
        .pipe(
            ofType(authActions.loginActionSuccess),
            tap(async (): Promise<boolean> => await this._router.navigateByUrl(''))
        ),
        {dispatch: false}
    );

    logout$ = createEffect(() => this._actions$
        .pipe(
            ofType(authActions.logoutAction),
            switchMap((): Observable<void> => of(this._authService.logOut())),
            map((): Action => authActions.logoutActionSuccess()),
            catchError((err: Error): Observable<Action> => of(
                authActions.logoutActionFailure({message: err.message, success: false}))
            )
        )
    );

    constructor(
        private _actions$: Actions,
        private readonly _authService: AuthService,
        private readonly _router: Router
    ) {}
}
