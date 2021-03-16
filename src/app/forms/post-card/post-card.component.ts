import {Component, Input} from '@angular/core';
import {IPost} from '../../interfaces/post.interface';
import {Store} from '@ngrx/store';
import {disLikeAction, likeAction} from '../../store/posts/posts.actions';

@Component({
    selector: 'app-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {

    @Input()
    public post: IPost;

    public wasLiked = false;
    public wasDisLiked = false;

    constructor(private readonly _store$: Store) {}

    public makeLike(): void {
        if (!this.wasDisLiked) {
            this._store$.dispatch(likeAction({postUUID: this.post.postUUID, rollback: this.wasLiked}));
            this.wasLiked = !this.wasLiked;
        }
    }

    public makeDislike(): void {
        if (!this.wasLiked) {
            this._store$.dispatch(disLikeAction({postUUID: this.post.postUUID, rollback: this.wasDisLiked}));
            this.wasDisLiked = !this.wasDisLiked;
        }
    }
}
