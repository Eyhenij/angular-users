import {Component, OnDestroy} from '@angular/core';
import {IUserForPost} from '../../interfaces/user-for-post.interface';
import {UsersService} from '../../services/users.service';
import {Router} from '@angular/router';
import {IServerResponse} from '../../interfaces/server-response.interface';
import {SubscriptionLike} from 'rxjs';

@Component({
    selector: 'app-new-user-page',
    templateUrl: './new-user-page.component.html',
    styleUrls: ['./new-user-page.component.scss']
})
export class NewUserPageComponent implements OnDestroy {

    private _subscription: SubscriptionLike[] = [];
    public newUser: IUserForPost = {
        name: '',
        login: '',
        email: '',
        password: ''
    };

    constructor(
        private readonly _usersService: UsersService,
        private readonly _router: Router
    ) {}

    ngOnDestroy(): void {
        this._subscription.forEach(
            (subscription: SubscriptionLike) => subscription.unsubscribe()
        );
        this._subscription = [];
    }

    public createNewUser(newData: IUserForPost): void {
        this._subscription.push(
            this._usersService.postNewUserData(newData).subscribe((response: IServerResponse) => {
                alert(response.message);
                this.redirectTo('home');
            })
        );
    }

    public redirectTo(url: string): void {
        this._router.navigateByUrl(url);
    }

}
