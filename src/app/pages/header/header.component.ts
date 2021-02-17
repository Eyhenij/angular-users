import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

    public isAuthorized = false;

    constructor(
        private readonly _authService: AuthService,
        private readonly _router: Router
    ) {}

    ngOnInit(): void {
        this.logIn();
    }

    public logIn(): void {
        this.isAuthorized = this._authService.isAuthorized();
    }

    public logOut(): void {
        this._authService.logOut();
        this._router.navigateByUrl('login');
        this.isAuthorized = false;
    }
}
