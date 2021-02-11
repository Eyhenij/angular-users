import {Component, OnInit} from '@angular/core';
import {IUserForPost} from '../../interfaces/user-for-post.interface';
import {UsersService} from '../../users.service';

@Component({
    selector: 'app-new-user-page',
    templateUrl: './new-user-page.component.html',
    styleUrls: ['./new-user-page.component.scss']
})
export class NewUserPageComponent implements OnInit {

    constructor(private readonly _usersService: UsersService) {}

    ngOnInit(): void {}

    public postNewUserData(newData: IUserForPost): void {
        this._usersService.postNewUserData(newData).subscribe((response: any) => {
            console.log(response);
        });
    }

}
