import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {IUser} from './interfaces/user.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public isLoading = false;
    public users: IUser[] = [];

    constructor(private readonly _usersService: UsersService) {}

    ngOnInit(): void {
        this._getUsers();
    }

    private _getUsers(): void {
        this._usersService.getUsersData().subscribe((users: IUser[]) => {
            this.users = users;
        });
    }
}
