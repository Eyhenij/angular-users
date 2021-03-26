import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { createCommentAction, getCommentsAction } from '../../../store/comments/comments.actions';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { IComment, ICommentContainer, ICreateCommentData } from '../../../interfaces/comment.interface';
import { getCommentsSelector } from '../../../store/comments/comments.selectors';
import { FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { getUserUUIDSelector } from '../../../store/profile/profile.selectors';

@Component({
    selector: 'app-comment-container',
    templateUrl: './comment-container.component.html',
    styleUrls: ['./comment-container.component.scss']
})
export class CommentContainerComponent implements OnInit, OnDestroy {
    @Input()
    public showCommentsMode: boolean;
    @Input()
    private readonly _parentUUID: string;

    public newCommentControl: FormControl;
    public comments$: Observable<IComment[]> = this._store$.select(getCommentsSelector)
        .pipe(
            map((commentsContainers: ICommentContainer[]): IComment[] => {
                return commentsContainers.find((container: ICommentContainer): boolean => {
                    return container.parentUUID === this._parentUUID;
                }).comments;
            })
        );

    private _subscription: SubscriptionLike[] = [];
    private _userUUID: string = null;

    constructor(private readonly _store$: Store) {}

    ngOnInit(): void {
        this._store$.dispatch(getCommentsAction({ parentUUID: this._parentUUID }));
        this.newCommentControl = new FormControl(
            '',
            [Validators.minLength(3), Validators.required]
        );
        this._subscription.push(this._store$
            .select(getUserUUIDSelector)
            .subscribe((userUUID: string): string => this._userUUID = userUUID)
        );
    }

    public createComment(): void {
        const newData: ICreateCommentData = {
            parentUUID: this._parentUUID,
            userUUID: this._userUUID,
            content: this.newCommentControl.value
        };
        this._store$.dispatch(createCommentAction({ newData }));
        this.newCommentControl.setValue('');
    }

    ngOnDestroy(): void {
        this._subscription.forEach((subscription: SubscriptionLike): void => subscription.unsubscribe());
        this._subscription = [];
    }
}
