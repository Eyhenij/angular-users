import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ICreatePostData} from '../../../interfaces/post.interface';

@Component({
    selector: 'app-new-post-form',
    templateUrl: './new-post-form.component.html',
    styleUrls: ['./new-post-form.component.scss']
})
export class NewPostFormComponent {

    @Output()
    public onCreatePost: EventEmitter<ICreatePostData> = new EventEmitter<ICreatePostData>();
    @Output()
    public closeCreatePostMode: EventEmitter<boolean> = new EventEmitter<boolean>();

    public form: FormGroup;

    constructor() {
        this.form = new FormGroup({
            title: new FormControl(
                'title',
                [Validators.minLength(3), Validators.required]
            ),
            content: new FormControl(
                'content',
                [Validators.minLength(3), Validators.required]
            )
        });
    }

    public onSave(): void {
        this.onCreatePost.emit(this.form.value);
    }

    public onCancel(): void {
        this.closeCreatePostMode.emit(true);
    }

}
