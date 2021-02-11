import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../users.service';
import {IUser} from '../../interfaces/user.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {IUserForPost} from '../../interfaces/user-for-post.interface';

@Component({
    selector: 'app-edit-user-page',
    templateUrl: './edit-user-page.component.html',
    styleUrls: ['./edit-user-page.component.scss']
})
export class EditUserPageComponent implements OnInit {

    public user!: IUser;
    public userForPost!: IUserForPost;

    constructor(
        private readonly _usersService: UsersService,
        private readonly _router: Router,
        private readonly _route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this._route.params.subscribe((params) => {
            this._getUserById(params.id);
        });
    }

    public updateUserData(newData: IUserForPost): void {
        console.log(this.user.id);
        this._usersService.putNewUserData(newData, this.user.id).subscribe((response: any) => {
            console.log(response);
        });
    }

    private _getUserById(id: number): void {
        this._usersService.getUserById(id).subscribe((data: IUser) => {
            this.user = data;
            this.userForPost = {
                name: this.user.name,
                email: this.user.email,
                login: this.user.login,
                password: this.user.password
            };
        });
    }

}
