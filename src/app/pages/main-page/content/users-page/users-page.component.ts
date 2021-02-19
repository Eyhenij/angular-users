import {Component, OnInit} from '@angular/core';
import {IUser} from '../../../../interfaces/user.interface';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {getUsersSelector} from '../../../../store/users/users.selectors';
import {getUsersAction} from '../../../../store/users/users.actions';

@Component({
    selector: 'app-users-page',
    templateUrl: './users-page.component.html',
    styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

    public users$: Observable<IUser[]> = this._store$.pipe(select(getUsersSelector));

    constructor(private readonly _store$: Store) {}

    ngOnInit(): void {
        this._store$.dispatch(getUsersAction());
    }

}
