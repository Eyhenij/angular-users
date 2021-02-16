import {Component, Input} from '@angular/core';
import {IUser} from '../../../interfaces/user.interface';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent{
    @Input()
    public selectedUser: IUser | undefined;

}
