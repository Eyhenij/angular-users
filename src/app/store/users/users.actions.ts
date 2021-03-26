import {createAction, props} from '@ngrx/store';
import {IUser, IUserForPost} from '../../interfaces/user.interfaces';

export const getUsersAction = createAction('[USERS_GET_ALL]');
export const getUsersActionSuccess = createAction('[USERS_GET_ALL_SUCCESS]', props<{users: IUser[]}>());
export const getUsersActionFailure = createAction('[USERS_GET_ALL_FAILURE]', props<{message: string, success: boolean}>());

export const getUserByIdAction = createAction('[USERS_GET_ONE]', props<{id: number}>());
export const getUserByIdActionSuccess = createAction('[USERS_GET_ONE_SUCCESS]', props<{user: IUser}>());
export const getUserByIdActionFailure = createAction('[USERS_GET_ONE_FAILURE]', props<{message: string, success: boolean}>());

export const deleteUserByIdAction = createAction('[USERS_DELETE_ONE]', props<{id: number}>());
export const deleteUserByIdActionSuccess = createAction('[USERS_DELETE_ONE_SUCCESS]');
export const deleteUserByIdActionFailure = createAction('[USERS_DELETE_ONE_FAILURE]', props<{message: string, success: boolean}>());

export const updateUserDataAction = createAction('[USERS_UPDATE_ONE]', props<{newUserData: IUserForPost, id: number}>());
export const updateUserDataActionSuccess = createAction('[USERS_UPDATE_ONE_SUCCESS]');
export const updateUserDataActionFailure = createAction('[USERS_UPDATE_ONE_FAILURE]', props<{message: string, success: boolean}>());

export const createUserAction = createAction('[USERS_CREATE_ONE]', props<{newUserData: IUserForPost}>());
export const createUserActionSuccess = createAction('[USERS_CREATE_ONE_SUCCESS]');
export const createUserActionFailure = createAction('[USERS_CREATE_ONE_FAILURE]', props<{message: string, success: boolean}>());
