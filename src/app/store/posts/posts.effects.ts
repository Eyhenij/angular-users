import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as postsActions from './posts.actions';
import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {from, Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {PostsService} from '../services/posts.service';
import {ICurrentItemsResponse, IServerResponse} from '../../interfaces/server-responses.interface';
import {IPost, IWasPostLiked} from '../../interfaces/post.interface';


@Injectable()
export class PostsEffects {

    getAllPosts$ = createEffect((): Observable<Action> => this._actions
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

    getCurrentPosts$ = createEffect((): Observable<Action> => this._actions
        .pipe(
            ofType(postsActions.getCurrentPostsAction),
            switchMap(({ currentData }): Observable<ICurrentItemsResponse<IPost[]>> => {
                return this._postsService.getCurrentProfilePosts(currentData);
            }),
            tap((res: ICurrentItemsResponse<IPost[]>): void => this._postsService.setProfilePostsData(res.items)),
            map((res: ICurrentItemsResponse<IPost[]>): Action => postsActions.getCurrentPostsActionSuccess({ res })),
            catchError((err: Error): Observable<Action> => of(
                postsActions.getCurrentPostsActionFailure({ message: err.message, success: false }))
            )
        )
    );

    getCurrentPostsSuccess$ = createEffect((): Observable<Action> => this._actions
        .pipe(
            ofType(postsActions.getCurrentPostsActionSuccess),
            switchMap(({ res }): Observable<Action> => from(res.items).pipe(
                mergeMap((post: IPost): Action[] => {
                    return [
                        postsActions.wasLikedAction({ userUUID: post.userUUID, postUUID: post.postUUID }),
                        postsActions.wasDislikedAction({ userUUID: post.userUUID, postUUID: post.postUUID })
                    ];
                })
            ))
        )
    );

    getOnePost$ = createEffect((): Observable<Action> => this._actions
        .pipe(
            ofType(postsActions.getOnePostAction),
            switchMap(({ userUUID, postUUID}): Observable<IPost> => this._postsService.getOneProfilePost(userUUID, postUUID)),
            map((post: IPost): Action => postsActions.getOnePostActionSuccess({ post })),
            catchError((err: Error): Observable<Action> => of(
                postsActions.getOnePostActionFailure({ message: err.message, success: false }))
            )
        )
    );

    createPost$ = createEffect((): Observable<Action> => this._actions
        .pipe(
            ofType(postsActions.createPostAction),
            switchMap(({newData}): Observable<IPost> => {
                return this._postsService.createNewPost(newData);
            }),
            map((): Action => postsActions.createPostActionSuccess()),
            catchError((err: Error): Observable<Action> => of(
                postsActions.createPostActionFailure({ message: err.message, success: false }))
            )
        )
    );

    updatePost$ = createEffect((): Observable<Action> => this._actions
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

    deletePost$ = createEffect((): Observable<Action> => this._actions
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

    makeLike$ = createEffect((): Observable<Action> => this._actions
        .pipe(
            ofType(postsActions.likeAction),
            switchMap(({ userUUID, postUUID, rollback }): Observable<IServerResponse> => {
                return this._postsService.makeLike(userUUID, postUUID, rollback);
            }),
            map((): Action => postsActions.likeActionSuccess()),
            catchError((err: Error): Observable<Action> => of(
                postsActions.likeActionFailure({ message: err.message, success: false }))
            )
        )
    );


    wasPostLiked$ = createEffect((): Observable<Action> => this._actions
        .pipe(
            ofType(postsActions.wasLikedAction),
            mergeMap(({ userUUID, postUUID }): Observable<IWasPostLiked> => {
                return this._postsService.wasPostLiked(userUUID, postUUID);
            }),
            map((serverResponse: IWasPostLiked): Action => {
                return postsActions.wasLikedActionSuccess({ ...serverResponse });
            }),
            catchError((err: Error): Observable<Action> => of(
                postsActions.wasLikedActionFailure({ message: err.message, success: false }))
            )
        )
    );

    makeDisLike$ = createEffect((): Observable<Action> => this._actions
        .pipe(
            ofType(postsActions.disLikeAction),
            switchMap(({ userUUID, postUUID, rollback }): Observable<IServerResponse> => {
                return this._postsService.makeDisLike(userUUID, postUUID, rollback);
            }),
            map((): Action => postsActions.disLikeActionSuccess()),
            catchError((err: Error): Observable<Action> => of(
                postsActions.disLikeActionFailure({ message: err.message, success: false }))
            )
        )
    );

    wasPostDisliked$ = createEffect((): Observable<Action> => this._actions
        .pipe(
            ofType(postsActions.wasDislikedAction),
            mergeMap(({ userUUID, postUUID }): Observable<IWasPostLiked> => {
                return this._postsService.wasPostDisliked(userUUID, postUUID);
            }),
            map((serverResponse: IWasPostLiked): Action => postsActions.wasDislikedActionSuccess({ ...serverResponse })),
            catchError((err: Error): Observable<Action> => of(
                postsActions.wasDislikedActionFailure({ message: err.message, success: false }))
            )
        )
    );

    constructor(
        private _actions: Actions,
        private _postsService: PostsService
    ) {}
}
