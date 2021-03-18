import {Action, createReducer, on} from '@ngrx/store';
import * as authActions from './auth.actions';
import {IServerResponse} from '../../interfaces/server-responses.interface';
import {IAuthState} from '../app.store';


const initialSate: IAuthState = {
    isAuth: !!localStorage.getItem('auth-token'),
    onLoading: false,
    accessToken: localStorage.getItem('auth-token'),
    serverError: null
};

const _authReducer = createReducer(
    initialSate,
// ===================  LOGIN  ===================
    on(authActions.loginAction,
        (state: IAuthState) => ({
            ...state,
            isAuth: false,
            onLoading: true
        })
    ),
    on(authActions.loginActionSuccess,
        (state: IAuthState, {token}) => ({
            ...state,
            isAuth: true,
            onLoading: false,
            accessToken: token,
            serverError: null
        })
    ),
    on(authActions.loginActionFailure,
        (state: IAuthState, serverResponse: IServerResponse) => ({
            ...state,
            isAuth: false,
            onLoading: false,
            accessToken: null,
            serverError: serverResponse
        })
    ),

// ===================  LOGOUT  ===================
    on(authActions.logoutAction,
        (state: IAuthState) => ({
            ...state,
            isAuth: false,
            onLoading: true,
            accessToken: null
        })
    ),
    on(authActions.logoutActionSuccess,
        (state: IAuthState) => ({
            ...state,
            isAuth: false,
            onLoading: false,
            accessToken: null,
            serverError: null
        })
    ),
    on(authActions.logoutActionFailure,
        (state: IAuthState, serverResponse: IServerResponse) => ({
            ...state,
            isAuth: false,
            onLoading: false,
            accessToken: null,
            serverError: serverResponse
        })
    ),

// ===================  LOGIN  ===================
    on(authActions.registerAction,
        (state: IAuthState) => ({
            ...state,
            onLoading: true
        })
    ),
    on(authActions.registerActionSuccess,
        (state: IAuthState) => ({
            ...state,
            onLoading: false,
            serverError: null
        })
    ),
    on(authActions.registerActionFailure,
        (state: IAuthState, serverResponse: IServerResponse) => ({
            ...state,
            onLoading: false,
            serverError: serverResponse
        })
    )
);

export const authReducer = (state: IAuthState, action: Action) => {
    return _authReducer(state, action);
};
