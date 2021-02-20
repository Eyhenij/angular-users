import {createReducer, on} from '@ngrx/store';
import * as authActions from './auth.actions';
import {IServerResponse} from '../../interfaces/server-response.interface';
import {IAuthState} from '../app.store';


const initialSate: IAuthState = {
    isAuth: !!localStorage.getItem('auth-token'),
    onLoading: false,
    accessToken: localStorage.getItem('auth-token'),
    serverError: null
};

const _authReducer = createReducer(
    initialSate,
    on(authActions.loginAction,
        (state: IAuthState) => ({
            ...state,
            isAuth: false,
            onLoading: true
        })
    ),
    on(authActions.loginActionSuccess,
        (state: IAuthState, serverResponse: IServerResponse) => ({
            ...state,
            isAuth: true,
            onLoading: false,
            accessToken: serverResponse.message,
            serverError: null
        })
    ),
    on(authActions.loginActionFailure,
        (state: IAuthState, serverResponse: IServerResponse) => ({
            ...state,
            isAuth: false,
            onLoading: false,
            accessToken: null,
            serverError: serverResponse.message
        })
    ),
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
            serverError: serverResponse.message
        })
    )
);

export const authReducer = (state, action) => {
    return _authReducer(state, action);
};
