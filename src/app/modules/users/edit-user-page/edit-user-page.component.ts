import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IUser, IUserForPost} from '../../../interfaces/user.interfaces';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {getUserByIdSelector} from '../../../store/users/users.selectors';
import {getUserByIdAction, updateUserDataAction} from '../../../store/users/users.actions';

@Component({
    selector: 'app-edit-user-page',
    templateUrl: './edit-user-page.component.html',
    styleUrls: ['./edit-user-page.component.scss']
})
export class EditUserPageComponent implements OnInit {

    public userId: number = null;
    public userDataForUpdate: IUserForPost;
    public userData$: Observable<IUser> = this._store$.select(getUserByIdSelector);

    constructor(
        private readonly _store$: Store,
        private readonly _router: Router,
        private readonly _route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.userId = this._route.snapshot.params.id;
        this._store$.dispatch(getUserByIdAction({id: this.userId}));
    }

    public async updateUserData(): Promise<void> {
        this._store$.dispatch(updateUserDataAction({newUserData: this.userDataForUpdate, id: this.userId}));
        alert('you just have updated user data');
        await this._router.navigateByUrl('users');
    }

    public changeUserData(changedUser: IUserForPost): void {
        this.userDataForUpdate = changedUser;
    }

}
