import {Component} from '@angular/core';
import {IUserForPost} from '../../../../interfaces/user.interfaces';
import {Store} from '@ngrx/store';
import {registerAction} from '../../../../store/authorization/auth.actions';

@Component({
    selector: 'app-new-user-page',
    templateUrl: './register-user-page.component.html',
    styleUrls: ['./register-user-page.component.scss']
})
export class RegisterUserPageComponent {

    public newUser: IUserForPost = {
        name: 'John Doe',
        login: '@john',
        email: 'john@email.com',
        password: 'thePasswordOfJohnDoe'
    };

    constructor(private readonly _store$: Store) {}

    public createNewUser(): void {
        this._store$.dispatch(registerAction({newUserData: this.newUser}));
    }

    public changeUserData(changedUser: IUserForPost): void {
        this.newUser = changedUser;
    }

}
