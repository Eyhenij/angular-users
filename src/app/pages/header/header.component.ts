import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor(
        private readonly _authService: AuthService,
        private readonly _router: Router
    ) {}

    public logOut(): void {
        this._authService.logOut();
        this._router.navigateByUrl('login');
        console.log(this._authService.isAuthorized());
    }
}
