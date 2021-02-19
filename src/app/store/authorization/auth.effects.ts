import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import * as authActions from './auth.actions';
import {AuthService} from '../services/auth.service';
import {of} from 'rxjs';
import {IServerResponse} from '../../interfaces/server-response.interface';


@Injectable()
export class AuthEffects {

    login$ = createEffect(() => this._actions$
        .pipe(
            ofType(authActions.login),
            switchMap(({loginName, password}) => this._authService.logIn(loginName, password)),
            map((serverResponse: IServerResponse) => authActions.loginSuccess(serverResponse)),
            catchError((err: Error) => of(authActions.loginFailure({message: err.message})))
        )
    );

    logout$ = createEffect(() => this._actions$
        .pipe(
            ofType(authActions.logout),
            switchMap(() => of(this._authService.logOut())),
            map(() => authActions.logoutSuccess()),
            catchError((err: Error) => of(authActions.logoutFailure({message: err.message})))
        )
    );

    constructor(
        private _actions$: Actions,
        private readonly _authService: AuthService
    ) {}
}
