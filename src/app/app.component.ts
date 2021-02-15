import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private _authService: AuthService) {
    }

    ngOnInit(): void {
        const token = localStorage.getItem('auth-token');
        if (token) {
            this._authService.setToken(token);
        }
    }

}
