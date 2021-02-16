import {Injectable} from '@angular/core';
import {Router, CanLoad, Route, UrlSerializer, UrlTree} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanLoad {

    constructor(
        private readonly _authService: AuthService,
        private readonly _serializer: UrlSerializer,
        private readonly _router: Router
    ) {
    }

    public canLoad(route: Route): boolean |UrlTree {
        if (this._authService.isAuthorized()) {
            return true;
        } else {
            return this._serializer.parse('/login');
            // this._router.navigateByUrl('/login');
            // return false;
        }
    }

}
