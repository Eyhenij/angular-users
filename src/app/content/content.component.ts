import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../interfaces/user.interface';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
    @Input()
    public selectedUser: IUser | undefined;

    constructor() {
    }

    ngOnInit(): void {
    }

}
