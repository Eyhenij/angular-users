import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {logoutAction} from '../../../../store/authorization/auth.actions';
import {getIsAuthValueSelector} from '../../../../store/authorization/auth.selectors';
import {getProfileLoginSelector} from '../../../../store/profile/profile.selectors';

@Component({
    selector: 'app-header-container',
    template: `<app-header
        [isAuth]="isAuth$ | async"
        [login]="login$ | async"
        (onLogOut)="logOut()"
    ></app-header>`
})
export class HeaderContainerComponent {

    public isAuth$: Observable<boolean> = this._store$.select(getIsAuthValueSelector);
    public login$: Observable<string> = this._store$.select(getProfileLoginSelector);

    constructor(
        private readonly _router: Router,
        private _store$: Store
    ) {}

    public async logOut(): Promise<void> {
        this._store$.dispatch(logoutAction());
        await this._router.navigateByUrl('login');
    }
}
