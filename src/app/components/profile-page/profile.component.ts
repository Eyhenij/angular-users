import {Component, Input} from '@angular/core';
import {IProfile} from '../../interfaces/profile.interface';

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
