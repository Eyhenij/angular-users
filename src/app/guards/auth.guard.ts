import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(
        private readonly _authService: AuthService,
        private readonly _router: Router
    ) {}

    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this._authService.isAuthorized()) {
            return true;
        } else {
            this._router.navigateByUrl('/login');
            return false;
        }
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(childRoute, state);
    }

}
