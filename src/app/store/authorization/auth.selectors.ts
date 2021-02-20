import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AUTH_FEATURE_NODE, IAuthState} from '../app.store';


const _authFeatureSelector = createFeatureSelector<IAuthState>(AUTH_FEATURE_NODE);

export const getIsAuthValueSelector = createSelector<IAuthState, IAuthState, boolean>(
    _authFeatureSelector,
    (state: IAuthState): boolean => state.isAuth
);

export const getAuthTokenSelector = createSelector<IAuthState, IAuthState, string>(
    _authFeatureSelector,
    (state: IAuthState): string => state.accessToken
);
