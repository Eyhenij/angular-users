import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IProfileState, PROFILE_FEATURE_NODE} from '../app.store';
import {IProfile} from '../../interfaces/profile.interface';
import {IFriend} from '../../interfaces/friend.interface';


const _profileFeatureSelector = createFeatureSelector<IProfileState>(PROFILE_FEATURE_NODE);

export const getProfileDataSelector = createSelector<IProfileState, IProfileState, IProfile>(
    _profileFeatureSelector,
    (state: IProfileState): IProfile => {
        console.log(state);
        return {
            name: state.name,
            login: state.login,
            email: state.email,
        };
    }
);

export const getFriendsSelector = createSelector<IProfileState, IProfileState, IFriend[]>(
    _profileFeatureSelector,
    (state: IProfileState): IFriend[] => state.friends
);

export const getRoleSelector = createSelector<IProfileState, IProfileState, string>(
    _profileFeatureSelector,
    (state: IProfileState): string => state.role
);
