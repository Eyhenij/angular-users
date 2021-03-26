import {IFollower} from './follower.interface';

export interface IProfile {
    name: string;
    login: string;
    email: string;
    userUUID: string;
    role: string;
    status: string;
    followers: IFollower[];
}
