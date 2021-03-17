import {createAction, props} from '@ngrx/store';
import {ICreatePostData, IPost} from '../../interfaces/post.interface';

export const getPostsAction = createAction('[POSTS_GET_ALL]', props<{userUUID: string}>());
export const getPostsActionSuccess = createAction('[POSTS_GET_ALL_SUCCESS]', props<{posts: IPost[]}>());
export const getPostsActionFailure = createAction('[POSTS_GET_ALL_FAILURE]', props<{message: string, success: boolean}>());

export const getOnePostAction = createAction('[POSTS_GET_ONE]', props<{userUUID: string, postUUID: string}>());
export const getOnePostActionSuccess = createAction('[POSTS_GET_ONE_SUCCESS]', props<{post: IPost}>());
export const getOnePostActionFailure = createAction('[POSTS_GET_ONE_FAILURE]', props<{message: string, success: boolean}>());

export const createPostAction = createAction('[POSTS_CREATE]', props<{newData: ICreatePostData}>());
export const createPostActionSuccess = createAction('[POSTS_CREATE_SUCCESS]', props<{newPost: IPost}>());
export const createPostActionFailure = createAction('[POSTS_CREATE_FAILURE]', props<{message: string, success: boolean}>());

export const updatePostAction = createAction('[POSTS_UPDATE]', props<{newData: ICreatePostData, postUUID: string}>());
export const updatePostActionSuccess = createAction('[POSTS_UPDATE_SUCCESS]');
export const updatePostActionFailure = createAction('[POSTS_UPDATE_FAILURE]', props<{message: string, success: boolean}>());

export const deletePostAction = createAction('[POSTS_DELETE_ONE]', props<{postUUID: string}>());
export const deletePostActionSuccess = createAction('[POSTS_DELETE_ONE_SUCCESS]');
export const deletePostActionFailure = createAction('[POSTS_DELETE_ONE_FAILURE]', props<{message: string, success: boolean}>());

export const likeAction = createAction('[POSTS_LIKE]', props<{postUUID: string, rollback: boolean}>());
export const likeActionSuccess = createAction('[POSTS_LIKE_SUCCESS]');
export const likeActionFailure = createAction('[POSTS_LIKE_FAILURE]', props<{message: string, success: boolean}>());

export const disLikeAction = createAction('[POSTS_DISLIKE]', props<{postUUID: string, rollback: boolean}>());
export const disLikeActionSuccess = createAction('[POSTS_DISLIKE_SUCCESS]');
export const disLikeActionFailure = createAction('[POSTS_DISLIKE_FAILURE]', props<{message: string, success: boolean}>());
