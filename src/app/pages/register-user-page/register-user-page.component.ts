import {Component} from '@angular/core';
import {IUserForPost} from '../../interfaces/user-for-post.interface';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {createUserAction} from '../../store/users/users.actions';
import {loginAction} from '../../store/authorization/auth.actions';

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

    constructor(
        private readonly _store$: Store,
        private readonly _router: Router
    ) {}

    public createNewUser(): void {
        this._store$.dispatch(createUserAction({newUserData: this.newUser}));
        this._store$.dispatch(loginAction({loginName: this.newUser.name, password: this.newUser.password}));
        this._router.navigateByUrl('/');
    }

    public changeUserData(changedUser: IUserForPost): void {
        this.newUser = changedUser;
    }

}
