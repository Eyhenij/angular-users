import {Component, OnDestroy, OnInit} from '@angular/core';
import {IUser} from '../../interfaces/user.interface';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IServerResponse} from '../../interfaces/server-response.interface';
import {SubscriptionLike} from 'rxjs';

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit, OnDestroy {

    public user!: IUser;
    private _subscription: SubscriptionLike[] = [];

    constructor(
        private readonly _usersService: UsersService,
        private readonly _router: Router,
        private readonly _route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this._routeWithUserId();
    }

    ngOnDestroy(): void {
        this._subscription.forEach(
            (subscription: SubscriptionLike) => subscription.unsubscribe()
        );
        this._subscription = [];
    }

    private _routeWithUserId(): void {
        this._subscription.push(
            this._route.params.subscribe((params) => {
                this._getUserById(params.id);
            })
        );
    }

    private _getUserById(id: number): void {
        this._subscription.push(
            this._usersService.getUserById(id).subscribe((user: IUser) => {
                if (user) {
                    this.user = user;
                } else {
                    this.redirectTo('not-found');
                }
            })
        );
    }

    public redirectTo(url: string = `edit/${this.user.id}`): void {
        this._router.navigateByUrl(url);
    }

    public deleteUserById(id: number): void {
        this._subscription.push(
            this._usersService.deleteUserById(id).subscribe((response: IServerResponse) => {
                alert(response.message);
                this.redirectTo(`home`);
            })
        );
    }

}
