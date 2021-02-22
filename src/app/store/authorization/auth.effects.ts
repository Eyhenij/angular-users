import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import * as authActions from './auth.actions';
import {AuthService} from '../services/auth.service';
import {of} from 'rxjs';
import {IServerResponse} from '../../interfaces/server-response.interface';
import {Router} from '@angular/router';


@Injectable()
export class AuthEffects {

    login$ = createEffect(() => this._actions$
        .pipe(
            ofType(authActions.loginAction),
            switchMap(({loginName, password}) => this._authService.logIn(loginName, password)),
            map((serverResponse: IServerResponse) => authActions.loginActionSuccess(serverResponse)),
            catchError((err: Error) => of(authActions.loginActionFailure({message: err.message})))
        )
    );

    loginSuccess$ = createEffect(() => this._actions$
        .pipe(
            ofType(authActions.loginActionSuccess),
            tap(({message}): void => {
                // localStorage.setItem('auth-token', message);
                this._router.navigateByUrl('users');
            })
        ),
        {dispatch: false}
    );

    logout$ = createEffect(() => this._actions$
        .pipe(
            ofType(authActions.logoutAction),
            switchMap(() => of(this._authService.logOut())),
            map(() => authActions.logoutActionSuccess()),
            catchError((err: Error) => of(authActions.logoutActionFailure({message: err.message})))
        )
    );

    constructor(
        private _actions$: Actions,
        private readonly _authService: AuthService,
        private readonly _router: Router
    ) {}
}
