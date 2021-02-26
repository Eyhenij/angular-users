import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IUsersState, USERS_FEATURE_NODE} from '../app.store';
import {IUser} from '../../interfaces/user.interfaces';


const _usersFeatureSelector = createFeatureSelector<IUsersState>(USERS_FEATURE_NODE);

export const getUsersSelector = createSelector<IUsersState, IUsersState, IUser[]>(
    _usersFeatureSelector,
    (state: IUsersState): IUser[] => state.users
);

export const getUserByIdSelector = createSelector<IUsersState, IUsersState, IUser>(
    _usersFeatureSelector,
    (state: IUsersState): IUser => state.selectedUser
);
