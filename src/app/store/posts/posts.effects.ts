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

    getAllPosts$ = createEffect(() => this._actions
        .pipe(
            ofType(postsActions.getPostsAction),
            switchMap(({ userUUID }): Observable<IPost[]> => this._postsService.getAllProfilePosts(userUUID)),
            tap((posts: IPost[]): void => this._postsService.setProfilePostsData(posts)),
            map((posts: IPost[]): Action => postsActions.getPostsActionSuccess({ posts })),
            catchError((err: Error): Observable<Action> => of(
                postsActions.getPostsActionFailure({ message: err.message, success: false }))
            )
        )
    );

    getOnePost$ = createEffect(() => this._actions
        .pipe(
            ofType(postsActions.getOnePostAction),
            switchMap(({ userUUID, postUUID}): Observable<IPost> => this._postsService.getOneProfilePost(userUUID, postUUID)),
            map((post: IPost): Action => postsActions.getOnePostActionSuccess({ post })),
            catchError((err: Error): Observable<Action> => of(
                postsActions.getOnePostActionFailure({ message: err.message, success: false }))
            )
        )
    );

    createNewPost$ = createEffect(() => this._actions
        .pipe(
            ofType(postsActions.createPostAction),
            switchMap(({newData}): Observable<IPost> => {
                return this._postsService.createNewPost(newData);
            }),
            map((newPost: IPost): Action => postsActions.createPostActionSuccess({ newPost })),
            catchError((err: Error): Observable<Action> => of(
                postsActions.createPostActionFailure({ message: err.message, success: false }))
            )
        )
    );

    updatePost$ = createEffect(() => this._actions
        .pipe(
            ofType(postsActions.updatePostAction),
            switchMap(({newData, postUUID}): Observable<IServerResponse> => {
                return this._postsService.updatePostData(newData, postUUID);
            }),
            map((): Action => postsActions.updatePostActionSuccess()),
            catchError((err: Error): Observable<Action> => of(
                postsActions.updatePostActionFailure({ message: err.message, success: false }))
            )
        )
    );

    deletePost$ = createEffect(() => this._actions
        .pipe(
            ofType(postsActions.deletePostAction),
            switchMap(({postUUID}): Observable<IServerResponse> => {
                return this._postsService.deletePost(postUUID);
            }),
            map((): Action => postsActions.deletePostActionSuccess()),
            catchError((err: Error): Observable<Action> => of(
                postsActions.deletePostActionFailure({ message: err.message, success: false }))
            )
        )
    );

    makeLike$ = createEffect(() => this._actions
        .pipe(
            ofType(postsActions.likeAction),
            switchMap(({ userUUID, postUUID, rollback }): Observable<IServerResponse> => {
                return this._postsService.makeLike(userUUID, postUUID, rollback);
            }),
            map((serverResponse: IServerResponse): Action => postsActions.likeActionSuccess(serverResponse)),
            catchError((err: Error): Observable<Action> => of(
                postsActions.likeActionFailure({ message: err.message, success: false }))
            )
        )
    );

    makeDisLike$ = createEffect(() => this._actions
        .pipe(
            ofType(postsActions.disLikeAction),
            switchMap(({ userUUID, postUUID, rollback }): Observable<IServerResponse> => {
                return this._postsService.makeDisLike(userUUID, postUUID, rollback);
            }),
            map((serverResponse: IServerResponse): Action => postsActions.disLikeActionSuccess(serverResponse)),
            catchError((err: Error): Observable<Action> => of(
                postsActions.disLikeActionFailure({ message: err.message, success: false }))
            )
        )
    );

    constructor(
        private _actions: Actions,
        private _postsService: PostsService
    ) {}
}
