import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { deletePostAction, disLikeAction, likeAction } from '../../../../store/posts/posts.actions';
import { IPost } from '../../../../interfaces/post.interface';

@Component({
    selector: 'app-post-card-button-block',
    templateUrl: './post-card.button-block.component.html',
    styleUrls: ['./post-card.button-block.component.scss']
})
export class PostCardButtonBlockComponent {

    @Input()
    public post: IPost;
    @Input()
    public isEditMode: boolean;

    @Output()
    public onEditModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output()
    public makePostChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private readonly _store$: Store) {}

    public makeLike(): void {
        if (!this.post.disliked) {
            this._store$.dispatch(likeAction({
                userUUID: this.post.userUUID,
                postUUID: this.post.postUUID,
                rollback: !!this.post.liked
            }));
        }
    }

    public makeDislike(): void {
        if (!this.post.liked) {
            this._store$.dispatch(disLikeAction({
                userUUID: this.post.userUUID,
                postUUID: this.post.postUUID,
                rollback: !!this.post.disliked
            }));
        }
    }

    public deletePost(): void {
        this._store$.dispatch(deletePostAction({ postUUID: this.post.postUUID }));
    }

    public goEditMode(): void {
        this.onEditModeChange.emit(true);
    }

    public leaveEditMode(): void {
        this.onEditModeChange.emit(false);
    }

    public done(): void {
        this.onEditModeChange.emit(false);
        this.makePostChange.emit(true);
    }
}
