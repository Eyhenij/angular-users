import {IUser} from '../interfaces/user.interfaces';
import {IFollower} from '../interfaces/user.interfaces';

export const AUTH_FEATURE_NODE = 'Authorization';
export const USERS_FEATURE_NODE = 'users';
export const PROFILE_FEATURE_NODE = 'profile';

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

export interface IProfileState {
    onLoading: boolean;
    name: string;
    login: string;
    email: string;
    role: string;
    followers: IFollower[];
    posts: string[];
    serverError?: string;
}
