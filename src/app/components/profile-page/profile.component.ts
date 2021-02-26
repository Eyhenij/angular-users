import {Component, Input} from '@angular/core';
import {IProfile} from '../../interfaces/user.interfaces';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
    @Input()
    public profile: IProfile;
    @Input()
    public posts: string[];
}
