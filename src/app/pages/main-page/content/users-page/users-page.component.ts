import {Component, OnInit} from '@angular/core';
import {IUser} from '../../../../interfaces/user.interface';
import {Observable} from 'rxjs';
import {UsersService} from '../../../../services/users.service';

@Component({
    selector: 'app-users-page',
    templateUrl: './users-page.component.html',
    styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

    public users: Observable<IUser[]>;

    constructor(private readonly _usersService: UsersService) {}

    ngOnInit(): void {
        this.users = this._usersService.getUsersData();
    }

}
