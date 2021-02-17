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
    private _userId: number = null;
    private _subscription: SubscriptionLike = null;

    constructor(
        private readonly _usersService: UsersService,
        private readonly _router: Router,
        private readonly _route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this._userId = this._route.snapshot.params.id;
        this.user = this._usersService.getUserById(this._userId);
    }

    ngOnDestroy(): void {
        this._subscription.unsubscribe();
        this._subscription = null;
    }

    public redirectTo(url: string = `edit/${this._userId}`): void {
        this._router.navigateByUrl(url);
    }

    public deleteUserById(): void {
        this._subscription = this._usersService.deleteUserById(this._userId).subscribe((response: IServerResponse) => {
            alert(response.message);
            this.redirectTo(`users`);
        });
    }

}
