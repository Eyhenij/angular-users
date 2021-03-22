import { Component, OnInit, ViewChild } from '@angular/core';
import { IUser } from '../../../interfaces/user.interfaces';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getCurrentUsersAction } from '../../../store/users/users.actions';
import { getTotalUsersCountSelector, getUsersSelector } from '../../../store/users/users.selectors';

@Component({
    selector: 'app-users-page',
    templateUrl: './users-page.component.html',
    styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

    @ViewChild(MatPaginator)
    private readonly _paginator: MatPaginator;

    private readonly _dataSource: MatTableDataSource<any> = new MatTableDataSource();

    public totalUsersCount$: Observable<number> = this._store$.select(getTotalUsersCountSelector);
    public currentUsers$: Observable<IUser[]> = this._store$.select(getUsersSelector);
    public pageSize = 2;
    public currentPage = 1;

    constructor(private readonly _store$: Store) {}

    ngOnInit(): void {
        this._getCurrentUsers();
        this._dataSource.paginator = this._paginator;
    }

    public onPageChange(event: PageEvent): void {
        this.pageSize = event.pageSize;
        this.currentPage = event.pageIndex + 1;
        this._getCurrentUsers();
    }

    private _getCurrentUsers(): void {
        this._store$.dispatch(getCurrentUsersAction({ currentData: { currentPage: this.currentPage, pageSize: this.pageSize } }));
    }
}
