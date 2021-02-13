import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {IUser} from '../../interfaces/user.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {IUserForPost} from '../../interfaces/user-for-post.interface';
import {IServerResponse} from '../../interfaces/server-response.interface';
import {SubscriptionLike} from 'rxjs';

@Component({
    selector: 'app-edit-user-page',
    templateUrl: './edit-user-page.component.html',
    styleUrls: ['./edit-user-page.component.scss']
})
export class EditUserPageComponent implements OnInit, OnDestroy {

    private _subscription: SubscriptionLike[] = [];
    public userId = 0;
    public userDataForUpdate: IUserForPost = {
        name: '',
        login: '',
        email: '',
        password: ''
    };

    constructor(
        private readonly _usersService: UsersService,
        private readonly _router: Router,
        private readonly _route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this._subscription.push(
            this._route.params.subscribe((params) => {
                this.userId = params.id;
                this._getUserById(this.userId);
            })
        );
    }

    ngOnDestroy(): void {
        this._subscription.forEach(
            (subscription: SubscriptionLike) => subscription.unsubscribe()
        );
        this._subscription = [];
    }

    public updateUserData(newData: IUserForPost): void {
        this._subscription.push(
            this._usersService.putNewUserData(newData, this.userId).subscribe((response: IServerResponse) => {
                alert(response.message);
                this.redirectTo();
            })
        );
    }

    public redirectTo(url: string = 'users'): void {
        this._router.navigateByUrl(url);
    }

    private _getUserById(id: number): void {
        this._subscription.push(
            this._usersService.getUserById(id).subscribe((data: IUser) => {
                this.userDataForUpdate = {
                    name: data.name,
                    email: data.email,
                    login: data.login,
                    password: data.password
                };
            })
        );
    }

}
