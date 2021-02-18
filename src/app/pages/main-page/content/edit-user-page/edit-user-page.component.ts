import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from '../../../../store/services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IUserForPost} from '../../../../interfaces/user-for-post.interface';
import {IServerResponse} from '../../../../interfaces/server-response.interface';
import {Observable, SubscriptionLike} from 'rxjs';

@Component({
    selector: 'app-edit-user-page',
    templateUrl: './edit-user-page.component.html',
    styleUrls: ['./edit-user-page.component.scss']
})
export class EditUserPageComponent implements OnInit, OnDestroy {

    private _subscription: SubscriptionLike = null;
    public userId: number;
    public userDataForUpdate: IUserForPost;
    public userData$: Observable<IUserForPost>;

    constructor(
        private readonly _usersService: UsersService,
        private readonly _router: Router,
        private readonly _route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.userId = this._route.snapshot.params.id;
        this.userData$ = this._usersService.getUserById(this.userId);
    }

    ngOnDestroy(): void {
        if (this._subscription) {
            this._subscription.unsubscribe();
            this._subscription = null;
        }
    }

    public updateUserData(): void {
        this._subscription = this._usersService.putNewUserData(this.userDataForUpdate, this.userId)
            .subscribe((response: IServerResponse) => {
                alert(response.message);
                this._router.navigateByUrl('users');
            });
    }

    public changeUserData(changedUser: IUserForPost): void {
        this.userDataForUpdate = changedUser;
    }

}
