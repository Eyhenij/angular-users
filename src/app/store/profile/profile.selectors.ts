import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IProfileState, PROFILE_FEATURE_NODE} from '../app.store';
import {IProfile} from '../../interfaces/profile.interface';
import {IFollower} from '../../interfaces/follower.interface';


const _profileFeatureSelector = createFeatureSelector<IProfileState>(PROFILE_FEATURE_NODE);

export const getProfileDataSelector = createSelector<IProfileState, IProfileState, IProfile>(
    _profileFeatureSelector,
    (state: IProfileState): IProfile => {
        return {
            name: state.name,
            login: state.login,
            email: state.email,
            role: state.role,
            userUUID: state.userUUID,
            status: state.status,
            followers: state.followers
        };
    }
);

export const getProfileLoginSelector = createSelector<IProfileState, IProfileState, string>(
    _profileFeatureSelector,
    (state: IProfileState): string => state.login
);

export const getFriendsSelector = createSelector<IProfileState, IProfileState, IFollower[]>(
    _profileFeatureSelector,
    (state: IProfileState): IFollower[] => state.followers
);

export const getRoleSelector = createSelector<IProfileState, IProfileState, string>(
    _profileFeatureSelector,
    (state: IProfileState): string => state.role
);

export const getUserUUIDSelector = createSelector<IProfileState, IProfileState, string>(
    _profileFeatureSelector,
    (state: IProfileState): string => state.userUUID
);

export const getIsAdminSelector = createSelector<IProfileState, IProfileState, boolean>(
    _profileFeatureSelector,
    (state: IProfileState): boolean => state.role === 'admin'
);
