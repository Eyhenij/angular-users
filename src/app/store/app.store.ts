import {IUser} from '../interfaces/user.interface';

export const AUTH_FEATURE_NODE = 'Authorization';
export const USERS_FEATURE_NODE = 'users';

export interface IUsersState {
    onLoading: boolean;
    users: IUser[];
    selectedUser: IUser;
    serverError?: string;
}

export interface IAuthState {
    isAuth: boolean;
    onLoading: boolean;
    accessToken?: string;
    serverError?: string;
}
