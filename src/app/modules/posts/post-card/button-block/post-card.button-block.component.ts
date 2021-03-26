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
    public editPostMode: boolean;
    @Input()
    public showCommentsMode: boolean;

    @Output()
    public onEditModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output()
    public makePostChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output()
    public onShowCommentsChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output()
    public onDeletePostEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

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
        this.onDeletePostEvent.emit();
    }

    public toggleShowComments(): void {
        this.onShowCommentsChange.emit(!this.showCommentsMode);
    }

    public toggleEditPostMode(): void {
        this.onEditModeChange.emit(!this.editPostMode);
    }

    public updatePost(): void {
        this.makePostChange.emit(true);
        this.toggleEditPostMode();
    }
}
