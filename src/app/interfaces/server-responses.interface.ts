import {IUser} from './user.interfaces';

export interface IServerResponse {
    message: string;
}

export interface IServerAuthResponse {
    profile: IUser;
    token: string;
}

export interface IServerErrors {
    authServerError: string;
    usersServerError: string;
}
