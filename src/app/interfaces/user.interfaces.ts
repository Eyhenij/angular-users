export interface IUser {
    name: string;
    login: string;
    email: string;
    password: string;
    id: number;
    role: string;
    status: string;
}

export interface IUserForPost {
    name: string;
    login: string;
    email: string;
    password: string;
}

export interface IProfile {
    name: string;
    login: string;
    email: string;
}

export interface IFollower {
    id: number;
}
