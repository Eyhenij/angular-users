import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {getOnloadingValue} from './store/authorization/auth.selectors';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    public onLoading$: Observable<boolean>;

    constructor(private readonly _store: Store) {}

    ngOnInit(): void {
        this.onLoading$ = this._store.pipe(select(getOnloadingValue));
    }
}
