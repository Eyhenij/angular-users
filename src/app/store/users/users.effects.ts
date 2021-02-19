import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UsersService} from '../services/users.service';
import * as usersActions from './users.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {IUser} from '../../interfaces/user.interface';
import {of} from 'rxjs';
import {IServerResponse} from '../../interfaces/server-response.interface';


@Injectable()
export class UsersEffects {

    getUsers$ = createEffect(() => this._actions$
        .pipe(
            ofType(usersActions.getUsersAction),
            switchMap(() => this._usersService.getUsersData()),
            map((serverResponse: IUser[]) => usersActions.getUsersActionSuccess({users: serverResponse})),
            catchError((err: Error) => of(usersActions.getUsersActionFailure({message: err.message})))
        )
    );

    getUserById$ = createEffect(() => this._actions$
        .pipe(
            ofType(usersActions.getUserByIdAction),
            switchMap(({id}) => this._usersService.getUserById(id)),
            map((serverResponse: IUser) => usersActions.getUserByIdActionSuccess({user: serverResponse})),
            catchError((err: Error) => of(usersActions.getUserByIdActionFailure({message: err.message})))
        )
    );

    deleteUserById$ = createEffect(() => this._actions$
        .pipe(
            ofType(usersActions.deleteUserByIdAction),
            switchMap(({id}) => this._usersService.deleteUserById(id)),
            map((serverResponse: IServerResponse) => usersActions.deleteUserByIdActionSuccess()),
            catchError((err: Error) => of(usersActions.deleteUserByIdActionFailure({message: err.message})))
        )
    );

    constructor(
        private readonly _actions$: Actions,
        private readonly _usersService: UsersService
    ) {}
}
