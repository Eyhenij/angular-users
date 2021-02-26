import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Input()
    public isAuth: boolean;
    @Input()
    public login: string;

    @Output()
    public onLogOut: EventEmitter<any> = new EventEmitter<any>();

    public logOut(): void {
        this.onLogOut.emit();
    }
}
