import {createFeatureSelector, createSelector} from '@ngrx/store';
import {USERS_FEATURE_NODE, IUsersState, IPostsState, POSTS_FEATURE_NODE} from './app.store';
import {AUTH_FEATURE_NODE, IAuthState} from './app.store';
import {IServerErrors} from '../interfaces/server-responses.interface';


const _authFeatureSelector = createFeatureSelector<IAuthState>(AUTH_FEATURE_NODE);
const _usersFeatureSelector = createFeatureSelector<IUsersState>(USERS_FEATURE_NODE);
const _postsFeatureSelector = createFeatureSelector<IPostsState>(POSTS_FEATURE_NODE);

export const getOnLoadingValueSelector = createSelector(
    _authFeatureSelector,
    _usersFeatureSelector,
    _postsFeatureSelector,
    (authState: IAuthState, usersState: IUsersState, postsState: IPostsState): boolean => {
            return usersState.onLoading || authState.onLoading || postsState.onLoading;
        }
);

export const getServerErrorSelector = createSelector(
    _authFeatureSelector,
    _usersFeatureSelector,
    _postsFeatureSelector,
    (authState: IAuthState, usersState: IUsersState, postsState: IPostsState): IServerErrors => ({
            authServerError: authState.serverError.message,
            usersServerError: usersState.serverError.message,
            postsServerError: postsState.serverError.message
        })
);
