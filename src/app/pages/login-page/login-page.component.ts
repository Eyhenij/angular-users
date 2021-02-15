import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SubscriptionLike} from 'rxjs';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {

    private _subscription: SubscriptionLike[] = [];

    public form: FormGroup;
    public loginControl: FormControl;
    public passwordControl: FormControl;

    constructor(
        private readonly _authService: AuthService,
        private readonly _router: Router
    ) {}

    ngOnInit(): void {
        this.form = new FormGroup({
            loginControl: new FormControl(
                '@mary',
                [Validators.minLength(3), Validators.required]
            ),
            passwordControl: new FormControl(
                '90p43809gh8754iko565',
                [Validators.minLength(8), Validators.required]
            )
        });
    }

    ngOnDestroy(): void {
        this._subscription.forEach((subscription: SubscriptionLike) => subscription.unsubscribe());
        this._subscription = [];
    }

    authorization(): void {
        const login = this.form.get('loginControl').value;
        const password = this.form.get('passwordControl').value;
        this._subscription.push(
            this._authService.logIn(login, password).subscribe(
                () => this.redirectToUsersPage()
            )
        );
    }

    public redirectToUsersPage(): void {
        this._router.navigateByUrl('users');
    }

}
