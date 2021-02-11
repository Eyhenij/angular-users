import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from './interfaces/user.interface';
import {IUserForPost} from './interfaces/user-for-post.interface';

@Injectable()
export class UsersService {

    private readonly _usersUrl: string = 'http://localhost:3000/api/users';
    private readonly _httpOptions = {
        headers: new HttpHeaders({

        })
    };

    constructor(private readonly _http: HttpClient) {}

    public getUsersData(): Observable<IUser[]> {
        return this._http.get<IUser[]>(this._usersUrl);
    }

    public getUserById(id: number): Observable<IUser> {
        return this._http.get<IUser>(`${this._usersUrl}/${id}`);
    }

    public postNewUserData(newData: IUserForPost): Observable<any> {
        return this._http.post(this._usersUrl, newData);
    }

    public putNewUserData(newData: IUserForPost, id: number): Observable<any> {
        return this._http.put(`${this._usersUrl}/${id}`, newData);
    }

    public deleteUserById(id: number): Observable<any> {
        return this._http.delete(`${this._usersUrl}/${id}`);
    }
}
