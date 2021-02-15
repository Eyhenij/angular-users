import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../interfaces/user.interface';
import {IUserForPost} from '../interfaces/user-for-post.interface';
import {IServerResponse} from '../interfaces/server-response.interface';
import {AuthService} from './auth.service';

@Injectable()
export class UsersService {

    private readonly _usersUrl: string = 'http://localhost:3000/api/users';
    private _httpOptions = { headers: new HttpHeaders() };

    constructor(
        private readonly _http: HttpClient,
        private readonly _authService: AuthService
    ) {}

    private _createHeaders(): any {
        this._httpOptions = {
            headers: new HttpHeaders({
                Authorization: `${this._authService.getToken()}`
            })
        };
    }

    public getUsersData(): Observable<IUser[]> {
        this._createHeaders();
        return this._http.get<IUser[]>(this._usersUrl, this._httpOptions);
    }

    public getUserById(id: number): Observable<IUser> {
        return this._http.get<IUser>(`${this._usersUrl}/${id}`, this._httpOptions);
    }

    public postNewUserData(newData: IUserForPost): Observable<IServerResponse> {
        return this._http.post<IServerResponse>(this._usersUrl, newData, this._httpOptions);
    }

    public putNewUserData(newData: IUserForPost, id: number): Observable<IServerResponse> {
        return this._http.put<IServerResponse>(`${this._usersUrl}/${id}`, newData, this._httpOptions);
    }

    public deleteUserById(id: number): Observable<IServerResponse> {
        return this._http.delete<IServerResponse>(`${this._usersUrl}/${id}`, this._httpOptions);
    }

}
