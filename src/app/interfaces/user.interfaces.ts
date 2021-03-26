export interface IUser {
    name: string;
    login: string;
    email: string;
    userUUID: string;
    status: string;
}

export interface IUserForPost {
    name: string;
    login: string;
    email: string;
    password?: string;
}
