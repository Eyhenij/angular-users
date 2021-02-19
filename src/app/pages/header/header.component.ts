import {Component, OnInit} from '@angular/core';
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
export class HeaderComponent implements OnInit{

    public isAuth$: Observable<boolean>;

    constructor(
        private readonly _authService: AuthService,
        private readonly _router: Router,
        private _store$: Store
    ) {}

    ngOnInit(): void {
        this.isAuth$ = this._store$.pipe(select(authData.getIsAuthValue));
    }

    public logOut(): void {
        this._store$.dispatch(logout());
        this._router.navigateByUrl('login');
    }
}
