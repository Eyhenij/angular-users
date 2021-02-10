import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../interfaces/user.interface';
import {UsersService} from '../../users.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit{

    @Input()
    public selectedUser: IUser | undefined;

    public user: IUser | undefined;

    constructor(
        private readonly _usersService: UsersService,
        private readonly _router: Router
    ) {}

    ngOnInit(): void {
        this._getUserById(2);
    }

    private _getUserById(id: number): void {
        this._usersService.getUserById(id).subscribe((user: IUser) => {
            if (user) {
                this.user = user;
            } else {
                this._router.navigateByUrl('/user/unknownData');
            }
        });
    }
}
