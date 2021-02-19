import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {getOnloadingValue} from './store/authorization/auth.selectors';
import {getOnLoadingValueSelector} from './store/users/users.selectors';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent{
    public onAuthLoading$: Observable<boolean> = this._store.pipe(select(getOnloadingValue));
    public onUsersLoading$: Observable<boolean> = this._store.pipe(select(getOnLoadingValueSelector));
    constructor(private readonly _store: Store) {}
}
