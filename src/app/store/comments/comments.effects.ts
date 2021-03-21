import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as commentsActions from './comments.actions';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {CommentsService} from '../services/comments.service';
import {IComment, ICommentContainer} from '../../interfaces/comment.interface';
import {IServerResponse} from '../../interfaces/server-responses.interface';


@Injectable()
export class CommentsEffects {

    getAllComments$ = createEffect((): Observable<Action> => this._actions
        .pipe(
            ofType(commentsActions.getCommentsAction),
            mergeMap(({ parentUUID }): Observable<any> => this._commentsService.getAllComments(parentUUID)),
            map((commentsContainer: ICommentContainer): Action => {
                return commentsActions.getCommentsActionSuccess({ commentsContainer });
            }),
            catchError((err: Error): Observable<Action> => of(
                commentsActions.getCommentsActionFailure({ message: err.message, success: false }))
            )
        )
    );

    crateComment$ = createEffect((): Observable<Action> => this._actions
        .pipe(
            ofType(commentsActions.createCommentAction),
            switchMap(({ newData }): Observable<IComment> => this._commentsService.createComment(newData)),
            map((comment: IComment): Action => commentsActions.createCommentActionSuccess({ comment })),
            catchError((err: Error): Observable<Action> => of(
                commentsActions.createCommentActionFailure({ message: err.message, success: false }))
            )
        )
    );

    updateComment$ = createEffect((): Observable<Action> => this._actions
        .pipe(
            ofType(commentsActions.updateCommentAction),
            switchMap(({ newData }): Observable<IServerResponse> => this._commentsService.updateComment(newData)),
            map((): Action => commentsActions.updateCommentActionSuccess()),
            catchError((err: Error): Observable<Action> => of(
                commentsActions.updateCommentActionFailure({ message: err.message, success: false }))
            )
        )
    );

    deleteComment$ = createEffect((): Observable<Action> => this._actions
        .pipe(
            ofType(commentsActions.deleteCommentAction),
            switchMap(({ commentUUID }): Observable<IServerResponse> => this._commentsService.deleteComment(commentUUID)),
            map((): Action => commentsActions.deleteCommentActionSuccess()),
            catchError((err: Error): Observable<Action> => of(
                commentsActions.deleteCommentActionFailure({ message: err.message, success: false }))
            )
        )
    );

    constructor(
        private _actions: Actions,
        private _commentsService: CommentsService
    ) {}
}
