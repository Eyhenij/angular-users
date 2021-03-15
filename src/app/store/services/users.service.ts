import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../../interfaces/user.interfaces';
import {IUserForPost} from '../../interfaces/user.interfaces';
import {IServerResponse} from '../../interfaces/server-responses.interface';
import {AuthService} from './auth.service';

@Injectable()
export class UsersService {

    private readonly _usersUrl: string = 'http://localhost:3000/api/users';

    constructor(
        private readonly _http: HttpClient,
        private readonly _authService: AuthService
    ) {}

    public getUsersData(): Observable<IUser[]> {
        return this._http.get<IUser[]>(this._usersUrl);
    }

    public getUserById(id: number): Observable<IUser> {
        return this._http.get<IUser>(`${this._usersUrl}/${id}`);
    }

    public createUser(newData: IUserForPost): Observable<IServerResponse> {
        return this._http.post<IServerResponse>(this._usersUrl, newData);
    }

    public updateUserById(newData: IUserForPost, id: number): Observable<IServerResponse> {
        return this._http.put<IServerResponse>(`${this._usersUrl}/${id}`, newData);
    }

    public deleteUserById(id: number): Observable<IServerResponse> {
        return this._http.delete<IServerResponse>(`${this._usersUrl}/${id}`);
    }
}
