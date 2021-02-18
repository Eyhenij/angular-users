import {Injectable} from '@angular/core';
import {
    Router,
    CanLoad,
    Route,
    UrlSerializer,
    UrlTree,
    CanActivate,
    CanActivateChild,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import {Store} from '@ngrx/store';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {

    constructor(
        private readonly _store$: Store,
        private readonly _serializer: UrlSerializer,
        private readonly _router: Router
    ) {}

    public canLoad(route: Route): boolean | UrlTree {
        return this._guardCheck();
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        return this._guardCheck();
    }

    public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        return this.canActivate(childRoute, state);
    }

    private _guardCheck(): boolean | UrlTree {
        return true;
    }

}
