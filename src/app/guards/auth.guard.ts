import {Injectable} from '@angular/core';
import {
    CanLoad, Route, UrlSerializer, UrlTree, CanActivate,
    CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot
} from '@angular/router';
import {Store} from '@ngrx/store';
import {getIsAuthValueSelector} from '../store/authorization/auth.selectors';
import {Observable} from 'rxjs';
import {first, map} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {

    constructor(
        private readonly _store$: Store,
        private readonly _serializer: UrlSerializer
    ) {}

    public canLoad(route: Route): Observable<boolean | UrlTree> {
        return this._guardCheck();
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
        return this._guardCheck();
    }

    public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
        return this.canActivate(childRoute, state);
    }

    private _guardCheck(): Observable<boolean | UrlTree> {
        return this._store$.select(getIsAuthValueSelector)
            .pipe(
                first(),
                map((isAuth: boolean) => isAuth ? isAuth : this._serializer.parse('login'))
            );
    }

}
