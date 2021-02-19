import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IUsersState, USERS_FEATURE_NODE} from './users.reducer';
import {IUser} from '../../interfaces/user.interface';


const _usersFeatureSelector = createFeatureSelector<IUsersState>(USERS_FEATURE_NODE);

export const getOnLoadingValueSelector = createSelector<IUsersState, IUsersState, boolean>(
    _usersFeatureSelector,
    (state: IUsersState): boolean => state.onLoading
);

export const getServerErrorSelector = createSelector<IUsersState, IUsersState, string>(
    _usersFeatureSelector,
    (state: IUsersState): string => state.serverError
);

export const getUsersSelector = createSelector<IUsersState, IUsersState, IUser[]>(
    _usersFeatureSelector,
    (state: IUsersState): IUser[] => state.users
);

export const getUserByIdSelector = createSelector<IUsersState, IUsersState, IUser>(
    _usersFeatureSelector,
    (state: IUsersState): IUser => state.selectedUser
);
