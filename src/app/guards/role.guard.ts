import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
    Route, CanLoad, CanActivateChild} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {getIsAdminSelector} from '../store/profile/profile.selectors';

@Injectable()
export class RoleGuard implements CanLoad, CanActivate, CanActivateChild {
    constructor(private readonly _store$: Store) {}

    public canLoad(route: Route): Observable<boolean> {
        return this._checkIsAdmin();
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this._checkIsAdmin();
    }

    public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(childRoute, state);
    }

    private _checkIsAdmin(): Observable<boolean> {
        return this._store$.select(getIsAdminSelector);
    }
}
