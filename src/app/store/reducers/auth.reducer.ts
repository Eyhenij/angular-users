import {createReducer, on} from '@ngrx/store';
import {login, loginSuccess, loginFailure, logout, logoutSuccess, logoutFailure} from '../actions/auth.actions';
import {IServerResponse} from '../../interfaces/server-response.interface';

export const AUTH_FEATURE_NAME = 'Authorization';

export interface IAuthState {
    isAuth: boolean;
    accessToken?: string;
    serverError?: string;
}

const initialSate: IAuthState = {
    isAuth: !!localStorage.getItem('auth-token'),
    accessToken: localStorage.getItem('auth-token'),
    serverError: null
};

const _authReducer = createReducer(
    initialSate,
    on(login,
        (state, {loginName, password}) => ({
            ...state,
            isAuth: true
        })
    ),
    on(loginSuccess,
        (state, serverResponse: IServerResponse) => ({
            ...state,
            isAuth: true,
            accessToken: serverResponse.message,
            serverError: null
        })
    ),
    on(loginFailure,
        (state, serverResponse: IServerResponse) => ({
            ...state,
            isAuth: false,
            accessToken: null,
            serverError: serverResponse.message
        })
    ),
    on(logout,
        (state) => ({
            ...state,
            isAuth: false,
            accessToken: null
        })
    ),
    on(logoutSuccess,
        (state) => ({
            ...state,
            isAuth: false,
            accessToken: null,
            serverError: null
        })
    ),
    on(logoutFailure,
        (state, {message = 'there is an error with logOit process...'}) => ({
            ...state,
            isAuth: false,
            accessToken: null,
            serverError: message
        })
    )
);

export const authReducer = (state, action) => {
    return _authReducer(state, action);
};
