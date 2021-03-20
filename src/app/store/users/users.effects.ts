import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UsersService} from '../services/users.service';
import * as usersActions from './users.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {IUser} from '../../interfaces/user.interfaces';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import {Action} from '@ngrx/store';
import {IServerResponse} from '../../interfaces/server-responses.interface';


@Injectable()
export class UsersEffects {

    getUsers$ = createEffect((): Observable<Action> => this._actions$
        .pipe(
            ofType(usersActions.getUsersAction),
            switchMap((): Observable<IUser[]> => this._usersService.getUsersData()),
            map((serverResponse: IUser[]): Action => usersActions.getUsersActionSuccess({users: serverResponse})),
            catchError((err: Error): Observable<Action> => of(
                usersActions.getUsersActionFailure({message: err.message, success: false}))
            )
        )
    );

    getUserById$ = createEffect((): Observable<Action> => this._actions$
        .pipe(
            ofType(usersActions.getUserByIdAction),
            switchMap(({id}): Observable<IUser> => this._usersService.getUserById(id)),
            map((serverResponse: IUser): Action => usersActions.getUserByIdActionSuccess({user: serverResponse})),
            catchError((err: Error): Observable<Action> => of(
                usersActions.getUserByIdActionFailure({message: err.message, success: false}))
            )
        )
    );

    deleteUserById$ = createEffect((): Observable<Action> => this._actions$
        .pipe(
            ofType(usersActions.deleteUserByIdAction),
            switchMap(({id}): Observable<IServerResponse> => this._usersService.deleteUserById(id)),
            map((): Action => usersActions.deleteUserByIdActionSuccess()),
            catchError((err: Error): Observable<Action> => of(
                usersActions.deleteUserByIdActionFailure({message: err.message, success: false}))
            )
        )
    );

    updateUserData$ =  createEffect((): Observable<Action> => this._actions$
        .pipe(
            ofType(usersActions.updateUserDataAction),
            switchMap(({newUserData, id}): Observable<IServerResponse> => this._usersService.updateUserById(newUserData, id)),
            map((): Action => usersActions.updateUserDataActionSuccess()),
            catchError((err: Error): Observable<Action> => of(
                usersActions.updateUserDataActionFailure({message: err.message, success: false}))
            )
        )
    );

    createNewUser$ =  createEffect((): Observable<Action> => this._actions$
        .pipe(
            ofType(usersActions.createUserAction),
            switchMap(({newUserData}): Observable<IServerResponse> => this._usersService.createUser(newUserData)),
            map((): Action => usersActions.createUserActionSuccess()),
            catchError((err: Error): Observable<Action> => of(
                usersActions.createUserActionFailure({message: err.message, success: false}))
            )
        )
    );

    createNewUserSuccess$ = createEffect((): Observable<Action> => this._actions$
        .pipe(
            ofType(usersActions.createUserActionSuccess),
            tap((): Promise<boolean> => this._router.navigateByUrl('login'))
        ),
        {dispatch: false}
    );

    constructor(
        private readonly _actions$: Actions,
        private readonly _usersService: UsersService,
        private readonly _router: Router
    ) {}
}
