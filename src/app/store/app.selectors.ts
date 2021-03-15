import {createFeatureSelector, createSelector} from '@ngrx/store';
import {USERS_FEATURE_NODE, IUsersState} from './app.store';
import {AUTH_FEATURE_NODE, IAuthState} from './app.store';
import {IServerErrors} from '../interfaces/server-responses.interface';


const _usersFeatureSelector = createFeatureSelector<IUsersState>(USERS_FEATURE_NODE);
const _authFeatureSelector = createFeatureSelector<IAuthState>(AUTH_FEATURE_NODE);

export const getOnLoadingValueSelector = createSelector(
    _usersFeatureSelector,
    _authFeatureSelector,
    (userSate: IUsersState, authState: IAuthState): boolean => userSate.onLoading || authState.onLoading
);

export const getServerErrorSelector = createSelector(
    _usersFeatureSelector,
    _authFeatureSelector,
    (userSate: IUsersState, authState: IAuthState): IServerErrors => ({
            authServerError: authState.serverError.message,
            usersServerError: userSate.serverError.message
        })
);
