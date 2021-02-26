import {createAction, props} from '@ngrx/store';
import {IUser} from '../../interfaces/user.interfaces';
import {IUserForPost} from '../../interfaces/user.interfaces';

export const getUsersAction = createAction('[Users] get all users');
export const getUsersActionSuccess = createAction('[Users] get all users Success', props<{users: IUser[]}>());
export const getUsersActionFailure = createAction('[Users] get all users Failure', props<{message: string}>());

export const getUserByIdAction = createAction('[Users] get one user', props<{id: number}>());
export const getUserByIdActionSuccess = createAction('[Users] get one user Success', props<{user: IUser}>());
export const getUserByIdActionFailure = createAction('[Users] get one user Failure', props<{message: string}>());

export const deleteUserByIdAction = createAction('[Users] delete user', props<{id: number}>());
export const deleteUserByIdActionSuccess = createAction('[Users] delete user Success');
export const deleteUserByIdActionFailure = createAction('[Users] delete user Failure', props<{message: string}>());

export const updateUserDataAction = createAction('[Users] update user', props<{newUserData: IUserForPost, id: number}>());
export const updateUserDataActionSuccess = createAction('[Users] update user Success');
export const updateUserDataActionFailure = createAction('[Users] update user Failure', props<{message: string}>());

export const createUserAction = createAction('[Users] create user', props<{newUserData: IUserForPost}>());
export const createUserActionSuccess = createAction('[Users] create user Success');
export const createUserActionFailure = createAction('[Users] create user Failure', props<{message: string}>());
