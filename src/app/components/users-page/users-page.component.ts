import {Component, OnInit, ViewChild} from '@angular/core';
import {IUser} from '../../interfaces/user.interfaces';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {getUsersSelector} from '../../store/users/users.selectors';
import {getUsersAction} from '../../store/users/users.actions';

@Component({
    selector: 'app-users-page',
    templateUrl: './users-page.component.html',
    styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

    public allUsers$: Observable<IUser[]> = this._store$.select(getUsersSelector);
    public totalUsersCount$: Observable<number> = this.allUsers$.pipe(
        map((users: IUser[]): number => users.length)
    );
    public users$: Observable<IUser[]> = this.allUsers$.pipe(
        map((users: IUser[]) => users.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize))
    );
    public pageSize = 2;
    public currentPage = 1;
    private _dataSource: MatTableDataSource<any>;

    @ViewChild(MatPaginator)
    paginator: MatPaginator;

    constructor(private readonly _store$: Store) {}

    ngOnInit(): void {
        this._store$.dispatch(getUsersAction());
        this._dataSource = new MatTableDataSource();
        this._dataSource.paginator = this.paginator;
    }

    public onPageChange(event: PageEvent): void {
        this.pageSize = event.pageSize;
        this.currentPage = event.pageIndex + 1;
        this.users$ = this.allUsers$.pipe(
            map((users: IUser[]) => users.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize))
        );
    }
}
