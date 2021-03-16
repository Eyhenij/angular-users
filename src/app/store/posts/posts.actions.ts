import {createAction, props} from '@ngrx/store';
import {ICreatePostData, IPost} from '../../interfaces/post.interface';

export const getPostsAction = createAction('[POSTS_GET]', props<{userUUID: string}>());
export const getPostsActionSuccess = createAction('[POSTS_GET_SUCCESS]', props<{posts: IPost[]}>());
export const getPostsActionFailure = createAction('[POSTS_GET_FAILURE]', props<{message: string, success: boolean}>());

export const likeAction = createAction('[POSTS_LIKE]', props<{postUUID: string, rollback: boolean}>());
export const likeActionSuccess = createAction('[POSTS_LIKE_SUCCESS]');
export const likeActionFailure = createAction('[POSTS_LIKE_FAILURE]', props<{message: string, success: boolean}>());

export const disLikeAction = createAction('[POSTS_DISLIKE]', props<{postUUID: string, rollback: boolean}>());
export const disLikeActionSuccess = createAction('[POSTS_DISLIKE_SUCCESS]');
export const disLikeActionFailure = createAction('[POSTS_DISLIKE_FAILURE]', props<{message: string, success: boolean}>());

export const createPostAction = createAction('[POST_CREATE]', props<{newData: ICreatePostData, postUUID: string}>());
export const createPostActionSuccess = createAction('[POSTS_CREATE_SUCCESS]');
export const createPostActionFailure = createAction('[POSTS_CREATE_FAILURE]', props<{message: string, success: boolean}>());
