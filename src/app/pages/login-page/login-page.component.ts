import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {login} from '../../store/actions/auth.actions';
import {getIsAuthValue, getServerError} from '../../store/selectors/auth.selectors';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{

    public isAuth$: Observable<boolean>;

    public form: FormGroup;
    public loginControl: FormControl;
    public passwordControl: FormControl;

    constructor(
        private _store$: Store,
        private readonly _router: Router
    ) {}

    ngOnInit(): void {
        this.isAuth$ = this._store$.pipe(select(getIsAuthValue));
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
        this._store$.dispatch(login({loginName, password}));
        // this._router.navigateByUrl('users');
    }

}
