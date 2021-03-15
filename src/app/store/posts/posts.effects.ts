import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as postsActions from './posts.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {PostsService} from '../services/posts.service';
import {IServerResponse} from '../../interfaces/server-responses.interface';
import {IPost} from '../../interfaces/post.interface';


@Injectable()
export class PostsEffects {

    setPostsData$ = createEffect(() => this._actions
        .pipe(
            ofType(postsActions.getPostsAction),
            switchMap(({ userUUID }): Observable<IPost[]> => this._postsService.getPostsData(userUUID)),
            tap((posts: IPost[]): void => this._postsService.setProfilePostsData(posts)),
            map((posts: IPost[]): Action => postsActions.getPostsActionSuccess({ posts })),
            catchError((err: Error): Observable<Action> => of(
                postsActions.getPostsActionFailure({ message: err.message, success: false }))
            )
        )
    );

    createNewPost$ = createEffect(() => this._actions
        .pipe(
            ofType(postsActions.createPostAction),
            switchMap(({newData, postUUID}): Observable<IServerResponse> => {
                return this._postsService.updatePostData(newData, postUUID);
            }),
            map((): Action => postsActions.createPostActionSuccess()),
            catchError((err: Error): Observable<Action> => of(
                postsActions.createPostActionFailure({ message: err.message, success: false }))
            )
        )
    );

    makeLike$ = createEffect(() => this._actions
        .pipe(
            ofType(postsActions.likeAction),
            switchMap(({postUUID}): Observable<IServerResponse> => {
                return this._postsService.makeLike(postUUID);
            }),
            map((): Action => postsActions.likeActionSuccess()),
            catchError((err: Error): Observable<Action> => of(
                postsActions.likeActionFailure({ message: err.message, success: false }))
            )
        )
    );

    constructor(
        private _actions: Actions,
        private _postsService: PostsService
    ) {}
}
