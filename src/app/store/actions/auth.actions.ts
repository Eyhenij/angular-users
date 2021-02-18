import {createAction, props} from '@ngrx/store';

export const login = createAction('[Auth] login', props<{loginName: string, password: string}>());
export const loginSuccess = createAction('[Auth] loginSuccess', props<{message: string}>());
export const loginFailure = createAction('[Auth] loginFailure', props<{message: string}>());

export const logout = createAction('[Auth] logout');
export const logoutSuccess = createAction('[Auth] logoutSuccess');
export const logoutFailure = createAction('[Auth] logoutFailure', props<{message: string}>());
