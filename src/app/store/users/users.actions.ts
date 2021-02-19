import {createAction, props} from '@ngrx/store';
import {IUser} from '../../interfaces/user.interface';

export const getUsersAction = createAction('[Users] get all users');
export const getUsersActionSuccess = createAction('[Users] get all users Success', props<{users: IUser[]}>());
export const getUsersActionFailure = createAction('[Users] get all users Failure', props<{message: string}>());

export const getUserByIdAction = createAction('[Users] get one user', props<{id: number}>());
export const getUserByIdActionSuccess = createAction('[Users] get one user Success', props<{user: IUser}>());
export const getUserByIdActionFailure = createAction('[Users] get one user Failure', props<{message: string}>());

export const deleteUserByIdAction = createAction('[Users] delete user', props<{id: number}>());
export const deleteUserByIdActionSuccess = createAction('[Users] delete user Success');
export const deleteUserByIdActionFailure = createAction('[Users] delete user Failure', props<{message: string}>());
