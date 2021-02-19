import {Component} from '@angular/core';
import {AuthService} from '../../store/services/auth.service';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as authData from '../../store/authorization/auth.selectors';
import {logout} from '../../store/authorization/auth.actions';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    public isAuth$: Observable<boolean> = this._store$.pipe(select(authData.getIsAuthValue));

    constructor(
        private readonly _authService: AuthService,
        private readonly _router: Router,
        private _store$: Store
    ) {}

    public logOut(): void {
        this._store$.dispatch(logout());
        this._router.navigateByUrl('login');
    }
}
