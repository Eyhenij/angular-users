import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {IProfile} from '../../interfaces/profile.interface';
import {getPostsSelector, getProfileDataSelector} from '../../store/profile/profile.selectors';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-profile-container',
    template: `<app-profile
        [profile]="profile$ | async"
        [posts]="posts$ | async"
    ></app-profile>`
})
export class ProfileContainerComponent {

    public profile$: Observable<IProfile> = this._store$.select(getProfileDataSelector);
    public posts$: Observable<string[]> = this._store$.select(getPostsSelector);

    constructor(private readonly _store$: Store) {}
}
