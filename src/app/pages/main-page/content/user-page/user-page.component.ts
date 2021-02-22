import {Component, OnInit} from '@angular/core';
import {IUser} from '../../../../interfaces/user.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {getUserByIdSelector} from '../../../../store/users/users.selectors';
import {deleteUserByIdAction, getUserByIdAction} from '../../../../store/users/users.actions';

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

    public user$: Observable<IUser> = this._store$.select(getUserByIdSelector);
    public userId: number = null;

    constructor(
        private readonly _store$: Store,
        private readonly _router: Router,
        private readonly _route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.userId = this._route.snapshot.params.id;
        this._store$.dispatch(getUserByIdAction({id: this.userId}));
    }

    public deleteUserById(): void {
        this._store$.dispatch(deleteUserByIdAction({id: this.userId}));
        alert('you just have deleted user');
        this._router.navigateByUrl('users');
    }

}
