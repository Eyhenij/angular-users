import {Component, Input} from '@angular/core';
import {IUser} from '../interfaces/user.interface';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent{

    @Input()
    public users: IUser[] = [];

}
