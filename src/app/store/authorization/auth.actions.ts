import {createAction, props} from '@ngrx/store';
import {IUser} from '../../interfaces/user.interface';

export const loginAction = createAction('[Auth] login', props<{loginName: string, password: string}>());
export const loginActionSuccess = createAction('[Auth] login Success', props<{token: string}>());
export const loginActionFailure = createAction('[Auth] login Failure', props<{message: string}>());

export const logoutAction = createAction('[Auth] logout');
export const logoutActionSuccess = createAction('[Auth] logout Success');
export const logoutActionFailure = createAction('[Auth] logout Failure', props<{message: string}>());
