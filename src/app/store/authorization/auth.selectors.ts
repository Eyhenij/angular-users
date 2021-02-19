import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AUTH_FEATURE_NODE, IAuthState} from './auth.reducer';


const _authFeatureSelector = createFeatureSelector<IAuthState>(AUTH_FEATURE_NODE);

export const getIsAuthValue = createSelector<IAuthState, IAuthState, boolean>(
    _authFeatureSelector,
    (state: IAuthState): boolean => state.isAuth
);

export const getServerError = createSelector<IAuthState, IAuthState, string>(
    _authFeatureSelector,
    (state: IAuthState): string => state.serverError
);

export const getToken = createSelector<IAuthState, IAuthState, string>(
    _authFeatureSelector,
    (state: IAuthState): string => state.accessToken
);

export const getOnloadingValue = createSelector<IAuthState, IAuthState, boolean>(
    _authFeatureSelector,
    (state: IAuthState): boolean => state.onLoading
);
