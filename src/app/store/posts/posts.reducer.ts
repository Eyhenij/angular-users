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
        (state: IPostsState, {posts}) => {
            return {
                ...state,
                posts: [...posts],
                onLoading: false
            };
        }
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
        (state: IPostsState, { postUUID, rollback }) => ({
            ...state,
            posts: state.posts.map((post: IPost) => {
                if (post.postUUID === postUUID) {
                    let newCountOfLikes = post.countOfLikes;
                    if (rollback) {
                        newCountOfLikes--;
                    } else {
                        newCountOfLikes++;
                    }
                    return { ...post, countOfLikes: newCountOfLikes, liked: !rollback };
                }
                return post;
            })
        })
    ),
    on(postsActions.likeActionFailure,
        (state: IPostsState, serverResponse: IServerResponse) => ({
            ...state,
            serverError: serverResponse
        })
    ),

// ===================  WAS LIKED  ===================
    on(postsActions.wasLikedActionSuccess,
        (state: IPostsState, { postUUID, value }) => ({
            ...state,
            posts: state.posts.map((post: IPost) => {
                if (post.postUUID === postUUID) {
                    return { ...post, liked: value };
                }
                return post;
            })
        })
    ),
    on(postsActions.wasLikedActionFailure,
        (state: IPostsState, serverResponse: IServerResponse) => ({
            ...state,
            serverError: serverResponse
        })
    ),

// ===================  DISLIKE  ===================
    on(postsActions.disLikeAction,
        (state: IPostsState, { postUUID, rollback }) => ({
            ...state,
            posts: state.posts.map((post: IPost) => {
                if (post.postUUID === postUUID) {
                    let newCountOfDisLikes = post.countOfDislikes;
                    if (rollback) {
                        newCountOfDisLikes--;
                    } else {
                        newCountOfDisLikes++;
                    }
                    return { ...post, countOfDislikes: newCountOfDisLikes, disliked: !rollback };
                }
                return post;
            })
        })
    ),
    on(postsActions.disLikeActionFailure,
        (state: IPostsState, serverResponse: IServerResponse) => ({
            ...state,
            serverError: serverResponse
        })
    ),

// ===================  WAS DISLIKED  ===================
    on(postsActions.wasDislikedActionSuccess,
        (state: IPostsState, { postUUID, value }) => ({
            ...state,
            posts: state.posts.map((post: IPost) => {
                if (post.postUUID === postUUID) {
                    return { ...post, disliked: value };
                }
                return post;
            })
        })
    ),
    on(postsActions.wasDislikedActionFailure,
        (state: IPostsState, serverResponse: IServerResponse) => ({
            ...state,
            serverError: serverResponse
        })
    ),
);

export const postsReducer = (state: IPostsState, action: Action) => {
    return _postsReducer(state, action);
};
