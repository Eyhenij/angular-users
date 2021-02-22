import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {logoutAction} from '../../store/authorization/auth.actions';
import {getIsAuthValueSelector} from '../../store/authorization/auth.selectors';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    public isAuth$: Observable<boolean> = this._store$.select(getIsAuthValueSelector);

    constructor(
        private readonly _router: Router,
        private _store$: Store
    ) {}

    public logOut(): void {
        this._store$.dispatch(logoutAction());
        this._router.navigateByUrl('login');
    }
}
