import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {IUserForPost} from '../../interfaces/user-for-post.interface';
import {Observable, of} from 'rxjs';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

    nameControl: FormControl;
    loginControl: FormControl;
    emailControl: FormControl;
    passwordControl: FormControl;

    public user: IUserForPost = {
        name: 'John',
        login: '@john',
        email: 'john@email.com',
        password: 'thePasswordOfJohn'
    };

    constructor() {
    }

    ngOnInit(): void {
        this._nameControlFunc();
        this._loginControlFunc();
        this._emailControlFunc();
        this._passwordControlFunc();
    }

    private _nameControlFunc(): void {
        this.nameControl = new FormControl(
            this.user.name,
            [Validators.required, Validators.minLength(3)],
            // [_nameAsyncValidator]
        );
    }

    private _nameAsyncValidator(formControl: FormControl): Observable<any> {
        return of({message: 'something here'});
    }

    private _loginControlFunc(): void {
        this.loginControl = new FormControl(
            this.user.login,
            [Validators.required, Validators.minLength(4)]
        );
    }

    private _emailControlFunc(): void {
        this.emailControl = new FormControl(
            this.user.email,
            [Validators.required, Validators.minLength(5)]
        );
    }

    private _passwordControlFunc(): void {
        this.passwordControl = new FormControl(
            this.user.password,
            [Validators.required, Validators.minLength(8)]
        );
    }

}
