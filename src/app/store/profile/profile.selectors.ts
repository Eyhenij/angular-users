import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IProfileState, PROFILE_FEATURE_NODE} from '../app.store';
import {IFollower, IProfile} from '../../interfaces/user.interfaces';


const _profileFeatureSelector = createFeatureSelector<IProfileState>(PROFILE_FEATURE_NODE);

export const getProfileDataSelector = createSelector<IProfileState, IProfileState, IProfile>(
    _profileFeatureSelector,
    (state: IProfileState): IProfile => {
        return {
            name: state.name,
            login: state.login,
            email: state.email,
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

export const getPostsSelector = createSelector<IProfileState, IProfileState, string[]>(
    _profileFeatureSelector,
    (state: IProfileState): string[] => state.posts
);
