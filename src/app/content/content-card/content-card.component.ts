import {Component, Input} from '@angular/core';
import {IUser} from '../../interfaces/user.interface';

@Component({
    selector: 'app-content-card',
    templateUrl: './content-card.component.html',
    styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {

    @Input()
    public selectedUser: IUser | undefined;

}
