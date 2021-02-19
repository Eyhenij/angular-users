import {createReducer, on} from '@ngrx/store';
import {login, loginSuccess, loginFailure, logout, logoutSuccess, logoutFailure} from './auth.actions';
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
    on(login,
        (state) => ({
            ...state,
            isAuth: false,
            onLoading: true
        })
    ),
    on(loginSuccess,
        (state, serverResponse: IServerResponse) => ({
            ...state,
            isAuth: true,
            onLoading: false,
            accessToken: serverResponse.message,
            serverError: null
        })
    ),
    on(loginFailure,
        (state, serverResponse: IServerResponse) => ({
            ...state,
            isAuth: false,
            onLoading: false,
            accessToken: null,
            serverError: serverResponse.message
        })
    ),
    on(logout,
        (state) => ({
            ...state,
            isAuth: false,
            onLoading: true,
            accessToken: null
        })
    ),
    on(logoutSuccess,
        (state) => ({
            ...state,
            isAuth: false,
            onLoading: false,
            accessToken: null,
            serverError: null
        })
    ),
    on(logoutFailure,
        (state, {message = 'there is an error with logOit process...'}) => ({
            ...state,
            isAuth: false,
            onLoading: false,
            accessToken: null,
            serverError: message
        })
    )
);

export const authReducer = (state, action) => {
    return _authReducer(state, action);
};
