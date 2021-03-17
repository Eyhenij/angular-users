import {IPostsState} from '../app.store';
import {Action, createReducer, on} from '@ngrx/store';
import * as postsActions from './posts.actions';
import {IServerResponse} from '../../interfaces/server-responses.interface';
import {IPost} from '../../interfaces/post.interface';

const initialState: IPostsState = {
    onLoading: false,
    posts: [],
    selectedPost: null,
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
            posts: [...posts]
        })
    ),
    on(postsActions.getPostsActionFailure,
        (state: IPostsState, serverResponse: IServerResponse) => ({
            ...state,
            onLoading: false,
            serverError: serverResponse
        })
    ),

// ===================  GET ONE POST  ===================
    on(postsActions.getOnePostAction,
        (state: IPostsState) => ({
            ...state,
            onLoading: true
        })
    ),
    on(postsActions.getOnePostActionSuccess,
        (state: IPostsState, { post }) => ({
            ...state,
            selectedPost: post,
            onLoading: false
        })
    ),
    on(postsActions.getOnePostActionFailure,
        (state: IPostsState, serverResponse: IServerResponse) => ({
            ...state,
            onLoading: false,
            serverError: serverResponse
        })
    ),

// ===================  CREATE NEW POSTS  ===================
    on(postsActions.createPostAction,
        (state: IPostsState) => ({
            ...state,
            onLoading: true
        })
    ),
    on(postsActions.createPostActionSuccess,
        (state: IPostsState, {newPost}) => ({
            ...state,
            posts: [...state.posts, newPost],
            onLoading: false
        })
    ),
    on(postsActions.createPostActionFailure,
        (state: IPostsState, serverResponse: IServerResponse) => ({
            ...state,
            onLoading: false,
            serverError: serverResponse
        })
    ),

// ===================  UPDATE POST  ===================
    on(postsActions.updatePostAction,
        (state: IPostsState, {newData, postUUID}) => ({
            ...state,
            posts: state.posts.map((post: IPost) => {
                if (post.postUUID === postUUID) {
                    return {...post, ...newData};
                }
                return post;
            }),
            onLoading: true
        })
    ),
    on(postsActions.updatePostActionSuccess,
        (state: IPostsState) => ({
            ...state,
            onLoading: false
        })
    ),
    on(postsActions.updatePostActionFailure,
        (state: IPostsState, serverResponse: IServerResponse) => ({
            ...state,
            onLoading: false,
            serverError: serverResponse
        })
    ),

// ===================  DELETE POST  ===================
    on(postsActions.deletePostAction,
        (state: IPostsState, {postUUID}) => ({
            ...state,
            posts: state.posts.filter((post: IPost) => post.postUUID !== postUUID),
            onLoading: true
        })
    ),
    on(postsActions.deletePostActionSuccess,
        (state: IPostsState) => ({
            ...state,
            onLoading: false
        })
    ),
    on(postsActions.deletePostActionFailure,
        (state: IPostsState, serverResponse: IServerResponse) => ({
            ...state,
            onLoading: false,
            serverError: serverResponse
        })
    ),

// ===================  LIKE  ===================
    on(postsActions.likeAction,
        (state: IPostsState, {postUUID, rollback}) => {
            return {
                ...state,
                posts: state.posts.map((post: IPost) => {
                    if (post.postUUID === postUUID) {
                        let newCountOfLikes = post.countOfLikes;
                        if (rollback) {
                            newCountOfLikes--;
                        } else {
                            newCountOfLikes++;
                        }
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

// ===================  DISLIKE  ===================
    on(postsActions.disLikeAction,
        (state: IPostsState, {postUUID, rollback}) => {
            return {
                ...state,
                posts: state.posts.map((post: IPost) => {
                    if (post.postUUID === postUUID) {
                        let newCountOfDisLikes = post.countOfDislikes;
                        if (rollback) {
                            newCountOfDisLikes--;
                        } else {
                            newCountOfDisLikes++;
                        }
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
    )
);

export const postsReducer = (state: IPostsState, action: Action) => {
    return _postsReducer(state, action);
};
