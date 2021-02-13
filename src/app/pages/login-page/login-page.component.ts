import {Component} from '@angular/core';
import {UsersService} from '../../services/users.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
    login = '';
    password = '';

    constructor(private readonly _usersService: UsersService) {

    }
    authorization(): void {
        this._usersService.login(this.login, this.password).subscribe();
    }

}
