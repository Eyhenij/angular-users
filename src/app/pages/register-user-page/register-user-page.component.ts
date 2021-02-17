import {Component, OnDestroy} from '@angular/core';
import {IUserForPost} from '../../interfaces/user-for-post.interface';
import {UsersService} from '../../services/users.service';
import {Router} from '@angular/router';
import {IServerResponse} from '../../interfaces/server-response.interface';
import {SubscriptionLike} from 'rxjs';

@Component({
    selector: 'app-new-user-page',
    templateUrl: './register-user-page.component.html',
    styleUrls: ['./register-user-page.component.scss']
})
export class RegisterUserPageComponent implements OnDestroy {

    private _subscription: SubscriptionLike = null;
    public newUser: IUserForPost = {
        name: 'John Doe',
        login: '@john',
        email: 'john@email.com',
        password: 'thePasswordOfJohnDoe'
    };

    constructor(
        private readonly _usersService: UsersService,
        private readonly _router: Router
    ) {}

    ngOnDestroy(): void {
        if (this._subscription) {
            this._subscription.unsubscribe();
            this._subscription = null;
        }
    }

    public createNewUser(newData: IUserForPost): void {
        this._subscription = this._usersService.postNewUserData(newData).subscribe((response: IServerResponse) => {
            alert(response.message);
            this._router.navigateByUrl('/');
        });
    }

    public changeUserData(changedUser: IUserForPost): void {
        this.newUser = changedUser;
    }

}
