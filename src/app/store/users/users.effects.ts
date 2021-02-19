import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UsersService} from '../services/users.service';
import * as usersActions from './users.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {IUser} from '../../interfaces/user.interface';
import {of} from 'rxjs';


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

    constructor(
        private readonly _actions$: Actions,
        private readonly _usersService: UsersService
    ) {}
}
