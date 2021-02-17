import {Component, OnDestroy, OnInit} from '@angular/core';
import {IUser} from '../../../../interfaces/user.interface';
import {UsersService} from '../../../../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IServerResponse} from '../../../../interfaces/server-response.interface';
import {Observable, SubscriptionLike} from 'rxjs';

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit, OnDestroy {

    public user: Observable<IUser>;
    public userId: number = null;
    private _subscription: SubscriptionLike = null;

    constructor(
        private readonly _usersService: UsersService,
        private readonly _router: Router,
        private readonly _route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.userId = this._route.snapshot.params.id;
        this.user = this._usersService.getUserById(this.userId);
    }

    ngOnDestroy(): void {
        this._subscription.unsubscribe();
        this._subscription = null;
    }

    public deleteUserById(): void {
        this._subscription = this._usersService.deleteUserById(this.userId).subscribe((response: IServerResponse) => {
            alert(response.message);
            this._router.navigateByUrl('users');
        });
    }

}
