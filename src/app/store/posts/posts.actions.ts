import {createAction, props} from '@ngrx/store';
import {ICreatePostData, ICurrentPosts, IPost} from '../../interfaces/post.interface';
import {ICurrentItemsResponse} from '../../interfaces/server-responses.interface';

export const getPostsAction = createAction('[POSTS_GET_ALL]', props<{userUUID: string}>());
export const getPostsActionSuccess = createAction('[POSTS_GET_ALL_SUCCESS]', props<{posts: IPost[]}>());
export const getPostsActionFailure = createAction('[POSTS_GET_ALL_FAILURE]', props<{message: string, success: boolean}>());

export const getCurrentPostsAction = createAction('[POSTS_GET_CURRENT]', props<{currentData: ICurrentPosts}>());
export const getCurrentPostsActionSuccess = createAction('[POSTS_GET_CURRENT_SUCCESS]', props<{res: ICurrentItemsResponse<IPost[]>}>());
export const getCurrentPostsActionFailure = createAction('[POSTS_GET_CURRENT_FAILURE]', props<{message: string, success: boolean}>());

export const getOnePostAction = createAction('[POSTS_GET_ONE]', props<{userUUID: string, postUUID: string}>());
export const getOnePostActionSuccess = createAction('[POSTS_GET_ONE_SUCCESS]', props<{post: IPost}>());
export const getOnePostActionFailure = createAction('[POSTS_GET_ONE_FAILURE]', props<{message: string, success: boolean}>());

export const createPostAction = createAction('[POSTS_CREATE]', props<{newData: ICreatePostData}>());
export const createPostActionSuccess = createAction('[POSTS_CREATE_SUCCESS]');
export const createPostActionFailure = createAction('[POSTS_CREATE_FAILURE]', props<{message: string, success: boolean}>());

export const updatePostAction = createAction('[POSTS_UPDATE]', props<{newData: ICreatePostData, postUUID: string}>());
export const updatePostActionSuccess = createAction('[POSTS_UPDATE_SUCCESS]');
export const updatePostActionFailure = createAction('[POSTS_UPDATE_FAILURE]', props<{message: string, success: boolean}>());

export const deletePostAction = createAction('[POSTS_DELETE_ONE]', props<{postUUID: string}>());
export const deletePostActionSuccess = createAction('[POSTS_DELETE_ONE_SUCCESS]');
export const deletePostActionFailure = createAction('[POSTS_DELETE_ONE_FAILURE]', props<{message: string, success: boolean}>());

export const likeAction = createAction('[POSTS_LIKE]', props<{userUUID: string, postUUID: string, rollback: boolean}>());
export const likeActionSuccess = createAction('[POSTS_LIKE_SUCCESS]');
export const likeActionFailure = createAction('[POSTS_LIKE_FAILURE]', props<{message: string, success: boolean}>());

export const wasLikedAction = createAction('[POSTS_WAS_LIKED]', props<{userUUID: string, postUUID: string}>());
export const wasLikedActionSuccess = createAction('[POSTS_WAS_LIKED_SUCCESS]', props<{postUUID: string, value: boolean}>());
export const wasLikedActionFailure = createAction('[POSTS_WAS_LIKED_FAILURE]', props<{message: string, success: boolean}>());

export const disLikeAction = createAction('[POSTS_DISLIKE]', props<{userUUID: string, postUUID: string, rollback: boolean}>());
export const disLikeActionSuccess = createAction('[POSTS_DISLIKE_SUCCESS]');
export const disLikeActionFailure = createAction('[POSTS_DISLIKE_FAILURE]', props<{message: string, success: boolean}>());

export const wasDislikedAction = createAction('[POSTS_WAS_DISLIKED]', props<{userUUID: string, postUUID: string}>());
export const wasDislikedActionSuccess = createAction('[POSTS_WAS_DISLIKED_SUCCESS]', props<{postUUID: string, value: boolean}>());
export const wasDislikedActionFailure = createAction('[POSTS_WAS_DISLIKED_FAILURE]', props<{message: string, success: boolean}>());
