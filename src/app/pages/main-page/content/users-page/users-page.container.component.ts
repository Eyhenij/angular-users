import {Component, OnInit, ViewChild} from '@angular/core';
import {IUser} from '../../../../interfaces/user.interface';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {getUsersSelector} from '../../../../store/users/users.selectors';
import {getUsersAction} from '../../../../store/users/users.actions';
import {map} from 'rxjs/operators';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
    selector: 'app-users-page-container',
    template: `<app-users-page

                ></app-users-page>`
})
export class UsersPageContainerComponent {}
