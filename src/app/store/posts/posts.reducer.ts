import {IPostsState} from '../app.store';
import {Action, createReducer, on} from '@ngrx/store';
import * as postsActions from './posts.actions';
import {IServerResponse} from '../../interfaces/server-responses.interface';
import {IPost} from '../../interfaces/post.interface';

const initialState: IPostsState = {
    onLoading: false,
    posts: JSON.parse(localStorage.getItem('profilePosts')),
    serverError: null
};

const _postsReducer = createReducer(
    initialState,
// ===================  GET ALL POSTS  ===================
    on(postsActions.getPostsAction,
        (state: IPostsState) => ({
            ...state,
            onLoading: true
        })
    ),
    on(postsActions.getPostsActionSuccess,
        (state: IPostsState, {posts}) => ({
            ...state,
            onLoading: false,
            posts: { ...posts }
        })
    ),
    on(postsActions.getPostsActionFailure,
        (state: IPostsState, serverResponse: IServerResponse) => ({
            ...state,
            onLoading: false,
            serverError: serverResponse
        })
    ),

// ===================  LIKE  ===================
    on(postsActions.likeAction,
        (state: IPostsState, {postUUID}) => {
            return {
                ...state,
                posts: state.posts.map((post: IPost) => {
                    if (post.postUUID === postUUID) {
                        const newCountOfLikes = post.countOfLikes + 1;
                        return {...post, countOfLikes: newCountOfLikes};
                    }
                    return post;
                })
            };
        }
    ),
    on(postsActions.likeActionSuccess,
        (state: IPostsState) => ({
            ...state
        })
    ),
    on(postsActions.likeActionFailure,
        (state: IPostsState, serverResponse: IServerResponse) => ({
            ...state,
            serverError: serverResponse
        })
    ),

// ===================  ROLLBACK LIKE  ===================
    on(postsActions.rollbackLikeAction,
        (state: IPostsState, {postUUID}) => {
            return {
                ...state,
                posts: state.posts.map((post: IPost) => {
                    if (post.postUUID === postUUID) {
                        const newCountOfLikes = post.countOfLikes - 1;
                        return {...post, countOfLikes: newCountOfLikes};
                    }
                    return post;
                })
            };
        }
    ),
    on(postsActions.rollbackLikeActionSuccess,
        (state: IPostsState) => ({
            ...state
        })
    ),
    on(postsActions.rollbackLikeActionFailure,
        (state: IPostsState, serverResponse: IServerResponse) => ({
            ...state,
            serverError: serverResponse
        })
    ),

// ===================  DISLIKE  ===================
    on(postsActions.disLikeAction,
        (state: IPostsState, {postUUID}) => {
            return {
                ...state,
                posts: state.posts.map((post: IPost) => {
                    if (post.postUUID === postUUID) {
                        const newCountOfDisLikes = post.countOfDislikes + 1;
                        return {...post, countOfDislikes: newCountOfDisLikes};
                    }
                    return post;
                })
            };
        }
    ),
    on(postsActions.disLikeActionSuccess,
        (state: IPostsState) => ({
            ...state
        })
    ),
    on(postsActions.disLikeActionFailure,
        (state: IPostsState, serverResponse: IServerResponse) => ({
            ...state,
            serverError: serverResponse
        })
    ),

// ===================  ROLLBACK DISLIKE  ===================
    on(postsActions.rollbackDisLikeAction,
        (state: IPostsState, {postUUID}) => {
            return {
                ...state,
                posts: state.posts.map((post: IPost) => {
                    if (post.postUUID === postUUID) {
                        const newCountOfDisLikes = post.countOfDislikes - 1;
                        return {...post, countOfDislikes: newCountOfDisLikes};
                    }
                    return post;
                })
            };
        }
    ),
    on(postsActions.rollbackDisLikeActionSuccess,
        (state: IPostsState) => ({
            ...state
        })
    ),
    on(postsActions.rollbackDisLikeActionFailure,
        (state: IPostsState, serverResponse: IServerResponse) => ({
            ...state,
            serverError: serverResponse
        })
    )
);

export const postsReducer = (state: IPostsState, action: Action) => {
    return _postsReducer(state, action);
};
