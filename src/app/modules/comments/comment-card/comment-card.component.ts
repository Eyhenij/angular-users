import {Component, Input, OnChanges} from '@angular/core';
import {IComment, IUpdateCommentData} from '../../../interfaces/comment.interface';
import {Store} from '@ngrx/store';
import {deleteCommentAction, updateCommentAction} from '../../../store/comments/comments.actions';
import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-comment-card',
    templateUrl: './comment-card.component.html',
    styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent implements OnChanges {
    @Input()
    public comment: IComment;

    public editCommentMode = false;
    public commentControl: FormControl;

    constructor(private readonly _store: Store) {}

    ngOnChanges(): void {
        this.commentControl = new FormControl(
            this.comment.content,
            [Validators.minLength(3), Validators.required]
        );
    }

    public deleteComment(): void {
        this._store.dispatch(deleteCommentAction({ parentUUID: this.comment.parentUUID, commentUUID: this.comment.commentUUID }));
    }

    public updateComment(): void {
        const newData: IUpdateCommentData = { commentUUID: this.comment.commentUUID, content: this.commentControl.value };
        this._store.dispatch(updateCommentAction({ newData, parentUUID: this.comment.parentUUID }));
        this.toggleEditCommentMode();
    }

    public toggleEditCommentMode(): void {
        this.editCommentMode = !this.editCommentMode;
    }
}
