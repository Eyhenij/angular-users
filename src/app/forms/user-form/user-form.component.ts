import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IUserForPost} from '../../interfaces/user-for-post.interface';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnChanges {

    public form: FormGroup;
    public nameControl: FormControl;
    public loginControl: FormControl;
    public emailControl: FormControl;
    public passwordControl: FormControl;

    @Input()
    public user: IUserForPost;

    @Output()
    public onChangeUser: EventEmitter<IUserForPost> = new EventEmitter<IUserForPost>();

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
