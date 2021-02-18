import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {login, loginFailure, loginSuccess, logout, logoutFailure, logoutSuccess} from '../actions/auth.actions';
import {AuthService} from '../services/auth.service';
import {of} from 'rxjs';
import {IServerResponse} from '../../interfaces/server-response.interface';


@Injectable()
export class AuthEffects {

    login$ = createEffect(() => this._actions$
        .pipe(
            ofType(login),
            switchMap(({loginName, password}) => this._authService.logIn(loginName, password)
                .pipe(
                    map((serverResponse: IServerResponse) => {
                        return loginSuccess(serverResponse);
                    }),
                    catchError(error => {
                        return of(loginFailure({message: error.massage}));
                    })
                )
            )
        )
    );

    logout$ = createEffect(() => this._actions$
        .pipe(
            ofType(logout),
            switchMap(() => of(this._authService.logOut())
                .pipe(
                    map(() => logoutSuccess()),
                    catchError(error => of(logoutFailure({message: error.massage})))
                )
            )
        )
    );

    constructor(
        private _actions$: Actions,
        private readonly _authService: AuthService
    ) {
    }
}
