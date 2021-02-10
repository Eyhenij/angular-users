import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from '../interfaces/user.interface';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    @Input()
    public users: IUser[] = [];
    @Input()
    public selectedUser: IUser | undefined;

    @Output()
    public onUserSelect: EventEmitter<IUser> = new EventEmitter<IUser>();

    constructor() {}

    ngOnInit(): void {}

    selectUser(user: IUser): void {
        this.onUserSelect.emit(user);
    }
}
