import {createReducer, on} from '@ngrx/store';
import * as authActions from './auth.actions';
import {IServerResponse} from '../../interfaces/server-response.interface';

export const AUTH_FEATURE_NODE = 'Authorization';

export interface IAuthState {
    isAuth: boolean;
    onLoading: boolean;
    accessToken?: string;
    serverError?: string;
}

const initialSate: IAuthState = {
    isAuth: !!localStorage.getItem('auth-token'),
    onLoading: false,
    accessToken: localStorage.getItem('auth-token'),
    serverError: null
};

const _authReducer = createReducer(
    initialSate,
    on(authActions.login,
        (state: IAuthState) => ({
            ...state,
            isAuth: false,
            onLoading: true
        })
    ),
    on(authActions.loginSuccess,
        (state: IAuthState, serverResponse: IServerResponse) => ({
            ...state,
            isAuth: true,
            onLoading: false,
            accessToken: serverResponse.message,
            serverError: null
        })
    ),
    on(authActions.loginFailure,
        (state: IAuthState, serverResponse: IServerResponse) => ({
            ...state,
            isAuth: false,
            onLoading: false,
            accessToken: null,
            serverError: serverResponse.message
        })
    ),
    on(authActions.logout,
        (state: IAuthState) => ({
            ...state,
            isAuth: false,
            onLoading: true,
            accessToken: null
        })
    ),
    on(authActions.logoutSuccess,
        (state: IAuthState) => ({
            ...state,
            isAuth: false,
            onLoading: false,
            accessToken: null,
            serverError: null
        })
    ),
    on(authActions.logoutFailure,
        (state: IAuthState, serverResponse: IServerResponse) => ({
            ...state,
            isAuth: false,
            onLoading: false,
            accessToken: null,
            serverError: serverResponse.message
        })
    )
);

export const authReducer = (state, action) => {
    return _authReducer(state, action);
};
