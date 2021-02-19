import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {getOnloadingValue} from './store/authorization/auth.selectors';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent{
    public onLoading$: Observable<boolean> = this._store.pipe(select(getOnloadingValue));
    constructor(private readonly _store: Store) {}
}
