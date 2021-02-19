import {Component} from '@angular/core';
import {IUserForPost} from '../../interfaces/user-for-post.interface';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {createUserAction} from '../../store/users/users.actions';

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

    public createNewUser(newData: IUserForPost): void {
        this._store$.dispatch(createUserAction({newUserData: newData}));
        alert('you just have created new user');
        this._router.navigateByUrl('/users');
    }

    public changeUserData(changedUser: IUserForPost): void {
        this.newUser = changedUser;
    }

}
