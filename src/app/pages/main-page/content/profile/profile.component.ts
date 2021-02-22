import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

    constructor(private readonly _store$: Store) {}

    ngOnInit(): void {
    }
}
