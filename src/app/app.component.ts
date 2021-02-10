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
    public selectedUser: IUser | undefined;

    constructor(private readonly _usersService: UsersService) {}

    ngOnInit(): void {
        this._getUsers();
    }

    private _getUsers(): void {
        this._usersService.getUsersData().subscribe((users: IUser[]) => {
            this.users = users;
            this.selectedUser = users[0];
        });
    }

    public onUserChange(user: IUser): void {
        this.selectedUser = user;
    }
}
