import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {deletePostAction, disLikeAction, likeAction} from '../../../../store/posts/posts.actions';

@Component({
    selector: 'app-post-card-button-block',
    templateUrl: './post-card.button-block.component.html',
    styleUrls: ['./post-card.button-block.component.scss']
})
export class PostCardButtonBlockComponent {

    @Input()
    public countOfLikes: number;
    @Input()
    public countOfDisLikes: number;
    @Input()
    private readonly _postUUID: string;

    @Output()
    public onEditModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output()
    public makePostChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    public isEditMode = false;
    public wasLiked = false;
    public wasDisLiked = false;

    constructor(private readonly _store$: Store) {}

    public makeLike(): void {
        if (!this.wasDisLiked) {
            this._store$.dispatch(likeAction({postUUID: this._postUUID, rollback: this.wasLiked}));
            this.wasLiked = !this.wasLiked;
        }
    }

    public makeDislike(): void {
        if (!this.wasLiked) {
            this._store$.dispatch(disLikeAction({postUUID: this._postUUID, rollback: this.wasDisLiked}));
            this.wasDisLiked = !this.wasDisLiked;
        }
    }

    public deletePost(): void {
        this._store$.dispatch(deletePostAction({ postUUID: this._postUUID }));
    }

    public goEditMode(): void {
        this.isEditMode = true;
        this.onEditModeChange.emit(this.isEditMode);
    }

    public leaveEditMode(): void {
        this.isEditMode = false;
        this.onEditModeChange.emit(this.isEditMode);
    }

    public done(): void {
        this.isEditMode = false;
        this.onEditModeChange.emit(this.isEditMode);
        this.makePostChange.emit(true);
    }
}
