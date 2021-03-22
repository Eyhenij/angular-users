import {IProfile} from './profile.interface';

export interface IServerResponse {
    message: string;
    success: boolean;
}

export interface IServerAuthResponse {
    profile: IProfile;
    token: string;
}

export interface IServerErrors {
    authServerError: string;
    usersServerError: string;
    postsServerError: string;
}

export interface ICurrentItemsResponse<T> {
    totalCount: number;
    items: T;
}
