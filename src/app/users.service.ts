import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from './interfaces/user.interface';

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
}
