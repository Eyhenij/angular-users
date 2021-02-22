import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {loginAction} from '../../store/authorization/auth.actions';
import {getIsAuthValueSelector} from '../../store/authorization/auth.selectors';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

    public isAuth$: Observable<boolean> = this._store$.select(getIsAuthValueSelector);
    public form: FormGroup;
    public loginControl: FormControl;
    public passwordControl: FormControl;
    public hide = true;

    constructor(
        private _store$: Store,
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

    authorization(): void {
        const loginName = this.form.get('loginControl').value;
        const password = this.form.get('passwordControl').value;
        this._store$.dispatch(loginAction({loginName, password}));
    }
}
