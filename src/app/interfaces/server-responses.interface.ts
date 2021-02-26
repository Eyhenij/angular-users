import {IUser} from './user.interface';

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
