import {createAction, props} from '@ngrx/store';
import {IUser} from '../../interfaces/user.interface';

export const getUsers = createAction('[Users] get all');
export const getUsersSuccess = createAction('[Users] get all Success', props<{users: IUser[]}>());
export const getUsersFailure = createAction('[Users] get all Failure', props<{message: string}>());
