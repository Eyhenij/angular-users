import {Component, OnDestroy, OnInit} from '@angular/core';
import {IUser} from '../../interfaces/user.interface';
import {SubscriptionLike} from 'rxjs';
import {UsersService} from '../../services/users.service';
import {IServerResponse} from '../../interfaces/server-response.interface';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-users-page',
    templateUrl: './users-page.component.html',
    styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit, OnDestroy {

    private _subscription: SubscriptionLike[] = [];
    public users: IUser[] = [];

    constructor(
        private readonly _usersService: UsersService,
        private readonly _router: Router,
        private _route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this._subscription.push(
            this._usersService.getUsersData().subscribe((users: IUser[]) => {
                this.users = users;
            })
        );
    }

    ngOnDestroy(): void {
        this._subscription.forEach(
            (subscription: SubscriptionLike) => subscription.unsubscribe()
        );
        this._subscription = [];
    }

    public goToEditPage(userId: number): void {
        this._router.navigate(['edit/', userId], {skipLocationChange: true});
    }

    public deleteUserById(id: number): void {
        this._subscription.push(
            this._usersService.deleteUserById(id).subscribe((response: IServerResponse) => {
                alert(response.message);
                // this._router.navigateByUrl('users');
            })
        );
    }

}
