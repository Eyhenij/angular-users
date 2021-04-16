import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-new-post-form',
    templateUrl: './new-post-form.component.html',
    styleUrls: ['./new-post-form.component.scss']
})
export class NewPostFormComponent {

    @Output()
    public onCreatePost: EventEmitter<{ title: string, content: string }> = new EventEmitter<{ title: string, content: string }>();
    @Output()
    public closeCreatePostMode: EventEmitter<boolean> = new EventEmitter<boolean>();

    public titleControl: FormControl;
    public newPostContent: string = null;

    constructor() {
        this.titleControl = new FormControl(
            'title',
            [Validators.minLength(3), Validators.required]
        );
    }

    public changeNewPost(newPostContent: string): void {
        this.newPostContent = newPostContent;
    }

    public changeNewPostForTiny(event): void {
        this.newPostContent = event;
    }

    public onSave(): void {
        this.onCreatePost.emit({ title: this.titleControl.value, content: this.newPostContent});
    }

    public onCancel(): void {
        this.closeCreatePostMode.emit(true);
    }

}
