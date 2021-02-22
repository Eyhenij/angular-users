import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {getOnLoadingValueSelector} from './store/app.selectors';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

    public onLoading$: Observable<boolean>;

    constructor(private readonly _store: Store) {
        this.onLoading$ = this._store.select(getOnLoadingValueSelector);
    }
}
