import {createAction, props} from '@ngrx/store';

export const loginAction = createAction('[Auth] login', props<{loginName: string, password: string}>());
export const loginActionSuccess = createAction('[Auth] loginSuccess', props<{message: string}>());
export const loginActionFailure = createAction('[Auth] loginFailure', props<{message: string}>());

export const logoutAction = createAction('[Auth] logout');
export const logoutActionSuccess = createAction('[Auth] logoutSuccess');
export const logoutActionFailure = createAction('[Auth] logoutFailure', props<{message: string}>());
