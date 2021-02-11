import {Component, OnInit} from '@angular/core';
import {IUserForPost} from '../../interfaces/user-for-post.interface';
import {UsersService} from '../../users.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-new-user-page',
    templateUrl: './new-user-page.component.html',
    styleUrls: ['./new-user-page.component.scss']
})
export class NewUserPageComponent implements OnInit {

    public newUser: IUserForPost = {
        name: '',
        login: '',
        email: '',
        password: ''
    };

    constructor(
        private readonly _usersService: UsersService,
        private readonly _router: Router
    ) {}

    ngOnInit(): void {}

    public createNewUser(newData: IUserForPost): void {
        this._usersService.postNewUserData(newData).subscribe((response: any) => {
            console.log(response);
        });
    }

    public cancel(): void {
        this._router.navigateByUrl('home');
    }

}
