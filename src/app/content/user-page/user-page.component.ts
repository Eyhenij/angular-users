import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../interfaces/user.interface';
import {UsersService} from '../../users.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit{

    public user: IUser;
    public id: number;

    constructor(
        private readonly _usersService: UsersService,
        private readonly _router: Router,
        private readonly _route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this._routeWithUserId();
    }
    private _routeWithUserId(): void {
        // this.id = this._route.snapshot.params.id;
        // this._getUserById(this.id);
        this._route.params.subscribe((params) => {
            this._getUserById(params.id);
        });
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
