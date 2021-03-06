import {createAction, props} from '@ngrx/store';
import {IUserForPost} from '../../interfaces/user.interfaces';

export const loginAction = createAction('[AUTH_LOGIN]', props<{loginName: string, password: string}>());
export const loginActionSuccess = createAction('[AUTH_LOGIN_SUCCESS]', props<{token: string}>());
export const loginActionFailure = createAction('[AUTH_LOGIN_FAILURE]', props<{message: string, success: boolean}>());

export const logoutAction = createAction('[AUTH_LOGOUT]');
export const logoutActionSuccess = createAction('[AUTH_LOGOUT_SUCCESS]');
export const logoutActionFailure = createAction('[AUTH_LOGOUT_FAILURE]', props<{message: string, success: boolean}>());

export const registerAction = createAction('[AUTH_REGISTER]', props<{newUserData: IUserForPost}>());
export const registerActionSuccess = createAction('[AUTH_REGISTER_SUCCESS]');
export const registerActionFailure = createAction('[AUTH_REGISTER_FAILURE]', props<{message: string, success: boolean}>());
