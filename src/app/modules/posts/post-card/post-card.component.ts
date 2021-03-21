import { Component, Input, OnInit } from '@angular/core';
import { ICreatePostData, IPost } from '../../../interfaces/post.interface';
import { Store } from '@ngrx/store';
import { updatePostAction } from '../../../store/posts/posts.actions';

@Component({
    selector: 'app-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

    @Input()
    public post: IPost;

    public editPostMode = false;
    public showCommentsMode = false;
    public newPostTitle: string = null;
    public newPostContent: string = null;

    constructor(private readonly _store$: Store) {}

    ngOnInit(): void {
        this.newPostTitle = this.post.title;
        this.newPostContent = this.post.content;
    }

    public setNewPostTitle(newTitle: string): void {
        this.newPostTitle = newTitle;
    }

    public setNewPostContent(newContent: string): void {
        this.newPostContent = newContent;
    }

    public toggleEditMode(value: boolean): void {
        this.editPostMode = value;
    }

    public toggleShowCommentsMode(value: boolean): void {
        this.showCommentsMode = value;
    }

    public makeDispatch(marker: boolean): void {
        if (marker) {
            const newData: ICreatePostData = {
                userUUID: this.post.userUUID,
                title: this.newPostTitle,
                content: this.newPostContent
            };
            this._store$.dispatch(updatePostAction({ newData, postUUID: this.post.postUUID }));
        }
    }
}
