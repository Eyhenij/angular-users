import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AUTH_FEATURE_NAME, IAuthState} from '../reducers/auth.reducer';


const _getFeature = createFeatureSelector<IAuthState>(AUTH_FEATURE_NAME);

export const getIsAuthValue = createSelector<IAuthState, IAuthState, boolean>(
    _getFeature,
    (state: IAuthState): boolean => state.isAuth
);

export const getServerError = createSelector<IAuthState, IAuthState, string>(
    _getFeature,
    (state: IAuthState) => state.serverError
);

export const getToken = createSelector<IAuthState, IAuthState, string>(
    _getFeature,
    (state: IAuthState): string => state.accessToken
);
