import {createAction, props} from '@ngrx/store';
import {IUser} from '../../interfaces/user.interface';

export const getUsersAction = createAction('[Users] get all');
export const getUsersActionSuccess = createAction('[Users] get all Success', props<{users: IUser[]}>());
export const getUsersActionFailure = createAction('[Users] get all Failure', props<{message: string}>());
