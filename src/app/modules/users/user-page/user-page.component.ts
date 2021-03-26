import {Component, OnInit} from '@angular/core';
import {IUser} from '../../../interfaces/user.interfaces';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {getUserByIdSelector} from '../../../store/users/users.selectors';
import {deleteUserByIdAction, getUserByIdAction} from '../../../store/users/users.actions';
import {getIsAdminSelector} from '../../../store/profile/profile.selectors';

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

    public user$: Observable<IUser> = this._store$.select(getUserByIdSelector);
    public isAdmin$: Observable<boolean> = this._store$.select(getIsAdminSelector);
    public userUUID: number = null;

    constructor(
        private readonly _store$: Store,
        private readonly _router: Router,
        private readonly _route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.userUUID = this._route.snapshot.params.id;
        this._store$.dispatch(getUserByIdAction({id: this.userUUID}));
    }

    public async deleteUserById(): Promise<void> {
        this._store$.dispatch(deleteUserByIdAction({id: this.userUUID}));
        alert('you just have deleted user');
        await this._router.navigateByUrl('users');
    }

}
