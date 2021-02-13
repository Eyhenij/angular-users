import {Component, OnDestroy, OnInit} from '@angular/core';
import {SubscriptionLike} from 'rxjs';
import {IUser} from '../../interfaces/user.interface';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
    private _subscription: SubscriptionLike[] = [];
    public isLoading = false;
    public users: IUser[] = [];

    constructor(private readonly _usersService: UsersService) {}

    ngOnInit(): void {
        this._subscription.push(
            this._usersService.getUsersData().subscribe((users: IUser[]) => {
                this.users = users;
            })
        );
    }

    ngOnDestroy(): void {
        this._subscription.forEach(
            (subscription: SubscriptionLike) => subscription.unsubscribe()
        );
        this._subscription = [];
    }
}
