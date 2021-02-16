import {Injectable} from '@angular/core';
import {Router, CanLoad, Route} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanLoad {

    constructor(
        private readonly _authService: AuthService,
        private readonly _router: Router
    ) {
    }

    public canLoad(route: Route): boolean {
        if (this._authService.isAuthorized()) {
            return true;
        } else {
            this._router.navigateByUrl('/login');
            return false;
        }
    }

}
