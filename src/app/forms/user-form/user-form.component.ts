import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IUserForPost} from '../../interfaces/user.interfaces';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnChanges, OnInit {

    constructor(private readonly _route: ActivatedRoute) {}

    public form: FormGroup;
    public hide = true;
    public isRegistrationPage = false;

    @Input()
    public user: IUserForPost;

    @Output()
    public onChangeUser: EventEmitter<IUserForPost> = new EventEmitter<IUserForPost>();

    ngOnInit(): void {
        this.isRegistrationPage = this._route.snapshot.routeConfig.path.includes('register');
    }

    ngOnChanges(): void {
        this.form = new FormGroup({
            name: new FormControl(
                this.user.name,
                [Validators.minLength(3), Validators.required, Validators.pattern(/[A-z]/)]
            ),
            login: new FormControl(
                this.user.login,
                [Validators.minLength(3), Validators.required]
            ),
            email: new FormControl(
                this.user.email,
                [Validators.email, Validators.required]
            ),
            password: new FormControl(
                this.user.password,
                [Validators.minLength(8), Validators.required]
            )
        });
    }

    public onChange(): void {
        this.onChangeUser.emit(this.form.value);
    }

}
