import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IUserForPost} from '../../interfaces/user-for-post.interface';
import {Observable, of} from 'rxjs';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

    public form: FormGroup;
    public nameControl: FormControl;
    public loginControl: FormControl;
    public emailControl: FormControl;
    public passwordControl: FormControl;

    @Input()
    public user: IUserForPost;

    constructor() {
    }

    ngOnInit(): void {
        this.form = new FormGroup({
            nameControl: new FormControl(
                this.user.name,
                [Validators.minLength(3), Validators.required]
            ),
            loginControl: new FormControl(
                this.user.login,
                [Validators.minLength(3), Validators.required]
            ),
            emailControl: new FormControl(
                this.user.email,
                [Validators.email, Validators.required]
            ),
            passwordControl: new FormControl(
                this.user.password,
                [Validators.minLength(8), Validators.required]
            )
        });
    }

}
