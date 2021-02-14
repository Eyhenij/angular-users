import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {IUser} from '../interfaces/user.interface';
import {IUserForPost} from '../interfaces/user-for-post.interface';
import {IServerResponse} from '../interfaces/server-response.interface';
import {tap, catchError, map} from 'rxjs/operators';

@Injectable()
export class UsersService {

    private readonly _usersUrl: string = 'http://localhost:3000/api/users';
    private readonly _loginUrl: string = 'http://localhost:3000/api/login';

    private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
        'eyJkYXRhVmFsdWVzIjp7Im5hbWUiOiJNYXJ5IiwibG9naW4iO' +
        'iJAbWFyeSIsImVtYWlsIjoibWFyeUBnbWFpbC5jb20iLCJwYX' +
        'Nzd29yZCI6IiQyYiQxMCRnd0luLmt6dHRyZVVWYmIuVFZnNER' +
        'PRm5aWE9yM2RmaWZCMmFPVzJSSVloYWRZcVYxZ0tQLiIsImlk' +
        'IjoxNywicm9sZSI6InVzZXIifSwiX3ByZXZpb3VzRGF0YVZhb' +
        'HVlcyI6eyJuYW1lIjoiTWFyeSIsImxvZ2luIjoiQG1hcnkiLC' +
        'JlbWFpbCI6Im1hcnlAZ21haWwuY29tIiwicGFzc3dvcmQiOiI' +
        'kMmIkMTAkZ3dJbi5renR0cmVVVmJiLlRWZzRET0ZuWlhPcjNk' +
        'ZmlmQjJhT1cyUklZaGFkWXFWMWdLUC4iLCJpZCI6MTcsInJvb' +
        'GUiOiJ1c2VyIn0sIl9jaGFuZ2VkIjp7fSwiX29wdGlvbnMiOn' +
        'siaXNOZXdSZWNvcmQiOmZhbHNlLCJfc2NoZW1hIjpudWxsLCJ' +
        'fc2NoZW1hRGVsaW1pdGVyIjoiIiwicmF3Ijp0cnVlLCJhdHRy' +
        'aWJ1dGVzIjpbIm5hbWUiLCJsb2dpbiIsImVtYWlsIiwicGFzc' +
        '3dvcmQiLCJpZCIsInJvbGUiXX0sImlzTmV3UmVjb3JkIjpmYW' +
        'xzZSwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTYxMzIyNjQ3NX0' +
        '.i36wH2DhJaPOzywp2F7DSahmKjPlNJRcnOGfRsPKbbI';

    // private token = '';

    private _httpOptions = {
        headers: new HttpHeaders({Authorization: `Bearer ${this.token}`})
        // headers: new HttpHeaders({Authorization: `Bearer ${this.token2}`})
        // headers: new HttpHeaders()
    };

    constructor(private readonly _http: HttpClient) {}

    private _createHeaders(token: string): any {
        this._httpOptions = {
            headers: new HttpHeaders({
                Authorization: `Bearer ${token}`
            })
        };
    }

    public getUsersData(): Observable<IUser[]> {
        // console.log(this.token);
        // this._createHeaders(this.token);
        // console.log(this._httpOptions.headers);
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

    public login(login: string, password: string): Observable<any> {
        return this._http.post<IServerResponse>(this._loginUrl, {login, password});
        //     .pipe(
        //         tap((data: IServerResponse): any => {
        //             localStorage.setItem('auth-token', data.message);
        //             console.log(data.message);
        //             this.token = data.message;
        //             this._setToken(data.message);
        //             this._createHeaders(data.message);
        //         }
        //     )
        // );
    }

    private _setToken(token: string): void {
        this.token = token;
    }

    public getToken(): string {
        return this.token;
    }
}
