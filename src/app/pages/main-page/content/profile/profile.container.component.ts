import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {IProfile} from '../../../../interfaces/profile.interface';
import {getProfileDataSelector} from '../../../../store/profile/profile.selectors';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-profile-container',
    template: `<app-profile [profile]="profile$ | async"></app-profile>`
})
export class ProfileContainerComponent {
    public profile$: Observable<IProfile> = this._store$.select(getProfileDataSelector);
    constructor(private readonly _store$: Store) {}
}
