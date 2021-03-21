import { createAction, props } from '@ngrx/store';
import {IComment, ICommentContainer, ICreateCommentData, IUpdateCommentData} from '../../interfaces/comment.interface';

export const getCommentsAction = createAction('[COMMENTS_GET_ALL]', props<{ parentUUID: string }>());
export const getCommentsActionSuccess = createAction('[COMMENTS_GET_ALL_SUCCESS]', props<{ commentsContainer: ICommentContainer }>());
export const getCommentsActionFailure = createAction(
    '[COMMENTS_GET_ALL_FAILURE]', props<{ message: string, success: boolean }>());

export const createCommentAction = createAction('[COMMENTS_CREATE]', props<{ newData: ICreateCommentData }>());
export const createCommentActionSuccess = createAction('[COMMENTS_CREATE_SUCCESS]', props<{ comment: IComment }>());
export const createCommentActionFailure = createAction(
    '[COMMENTS_CREATE_FAILURE]', props<{ message: string, success: boolean }>());

export const updateCommentAction = createAction('[COMMENTS_UPDATE]', props<{ newData: IUpdateCommentData, parentUUID: string }>());
export const updateCommentActionSuccess = createAction('[COMMENTS_UPDATE_SUCCESS]');
export const updateCommentActionFailure = createAction(
    '[COMMENTS_UPDATE_FAILURE]', props<{ message: string, success: boolean }>());

export const deleteCommentAction = createAction('[COMMENTS_DELETE]', props<{ parentUUID: string, commentUUID: string }>());
export const deleteCommentActionSuccess = createAction('[COMMENTS_DELETE_SUCCESS]');
export const deleteCommentActionFailure = createAction(
    '[COMMENTS_DELETE_FAILURE]', props<{ message: string, success: boolean }>());
