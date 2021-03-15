import {Component, Input} from '@angular/core';
import {IPost} from '../../interfaces/post.interface';
import {Store} from '@ngrx/store';
import {disLikeAction, likeAction, rollbackDisLikeAction, rollbackLikeAction} from '../../store/posts/posts.actions';

@Component({
    selector: 'app-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {

    @Input()
    public post: IPost;

    public wasLiked = 'none';

    constructor(private readonly _store$: Store) {}

    public makeLike(): void {
        switch (this.wasLiked) {
            case 'none':
                this._store$.dispatch(likeAction({postUUID: this.post.postUUID}));
                this.wasLiked = 'like';
                break;
            case 'like':
                this._store$.dispatch(rollbackLikeAction({postUUID: this.post.postUUID}));
                this.wasLiked = 'none';
                break;
        }
    }

    public makeDislike(): void {
        switch (this.wasLiked) {
            case 'none':
                this.wasLiked = 'dislike';
                this._store$.dispatch(disLikeAction({postUUID: this.post.postUUID}));
                break;
            case 'dislike':
                this.wasLiked = 'none';
                this._store$.dispatch(rollbackDisLikeAction({postUUID: this.post.postUUID}));
                break;
        }
    }
}
