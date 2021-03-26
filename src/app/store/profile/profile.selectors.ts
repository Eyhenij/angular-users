import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IProfileState, PROFILE_FEATURE_NODE} from '../app.store';


const _profileFeatureSelector = createFeatureSelector<IProfileState>(PROFILE_FEATURE_NODE);

export const getProfileLoginSelector = createSelector<IProfileState, IProfileState, string>(
    _profileFeatureSelector,
    (state: IProfileState): string => state.login
);

export const getUserUUIDSelector = createSelector<IProfileState, IProfileState, string>(
    _profileFeatureSelector,
    (state: IProfileState): string => state.userUUID
);

export const getIsAdminSelector = createSelector<IProfileState, IProfileState, boolean>(
    _profileFeatureSelector,
    (state: IProfileState): boolean => state.role === 'admin'
);
