import {IUser} from '../interfaces/user.interfaces';
import {IFollower} from '../interfaces/follower.interface';
import {IServerResponse} from '../interfaces/server-responses.interface';
import {IPost} from '../interfaces/post.interface';

export const AUTH_FEATURE_NODE = 'Authorization';
export const USERS_FEATURE_NODE = 'users';
export const PROFILE_FEATURE_NODE = 'profile';
export const POSTS_FEATURE_NODE = 'posts';

export interface IUsersState {
    onLoading: boolean;
    users: IUser[];
    selectedUser: IUser;
    serverError?: IServerResponse;
}

export interface IAuthState {
    isAuth: boolean;
    onLoading: boolean;
    accessToken?: string;
    serverError?: IServerResponse;
}

export interface IProfileState {
    onLoading: boolean;
    name: string;
    login: string;
    email: string;
    userUUID: string;
    role: string;
    status: string;
    followers: IFollower[];
    serverError?: IServerResponse;
}

export interface IPostsState {
    onLoading: boolean;
    posts: IPost[];
    selectedPost: IPost;
    serverError: IServerResponse;
}
