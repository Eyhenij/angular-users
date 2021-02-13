import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../interfaces/user.interface';
import {IUserForPost} from '../interfaces/user-for-post.interface';
import {IServerResponse} from '../interfaces/server-response.interface';
import {tap} from 'rxjs/operators';

@Injectable()
export class UsersService {

    private readonly _usersUrl: string = 'http://localhost:3000/api/users';
    private readonly _loginUrl: string = 'http://localhost:3000/api/login';
    private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhVmFsdWVzIjp7Im5hbWUiOiJNYXJ5IiwibG9naW4iOiJAbWFyeSIsImVtYWlsIjoibWFyeUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRnd0luLmt6dHRyZVVWYmIuVFZnNERPRm5aWE9yM2RmaWZCMmFPVzJSSVloYWRZcVYxZ0tQLiIsImlkIjoxNywicm9sZSI6InVzZXIifSwiX3ByZXZpb3VzRGF0YVZhbHVlcyI6eyJuYW1lIjoiTWFyeSIsImxvZ2luIjoiQG1hcnkiLCJlbWFpbCI6Im1hcnlAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkZ3dJbi5renR0cmVVVmJiLlRWZzRET0ZuWlhPcjNkZmlmQjJhT1cyUklZaGFkWXFWMWdLUC4iLCJpZCI6MTcsInJvbGUiOiJ1c2VyIn0sIl9jaGFuZ2VkIjp7fSwiX29wdGlvbnMiOnsiaXNOZXdSZWNvcmQiOmZhbHNlLCJfc2NoZW1hIjpudWxsLCJfc2NoZW1hRGVsaW1pdGVyIjoiIiwicmF3Ijp0cnVlLCJhdHRyaWJ1dGVzIjpbIm5hbWUiLCJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJpZCIsInJvbGUiXX0sImlzTmV3UmVjb3JkIjpmYWxzZSwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTYxMzIyNjQ3NX0.i36wH2DhJaPOzywp2F7DSahmKjPlNJRcnOGfRsPKbbI';
    private token2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhVmFsdWVzIjp7Im5hbWUiOiJNYXJ5IiwibG9naW4iOiJAbWFyeSIsImVtYWlsIjoibWFyeUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRnd0luLmt6dHRyZVVWYmIuVFZnNERPRm5aWE9yM2RmaWZCMmFPVzJSSVloYWRZcVYxZ0tQLiIsImlkIjoxNywicm9sZSI6InVzZXIifSwiX3ByZXZpb3VzRGF0YVZhbHVlcyI6eyJuYW1lIjoiTWFyeSIsImxvZ2luIjoiQG1hcnkiLCJlbWFpbCI6Im1hcnlAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkZ3dJbi5renR0cmVVVmJiLlRWZzRET0ZuWlhPcjNkZmlmQjJhT1cyUklZaGFkWXFWMWdLUC4iLCJpZCI6MTcsInJvbGUiOiJ1c2VyIn0sIl9jaGFuZ2VkIjp7fSwiX29wdGlvbnMiOnsiaXNOZXdSZWNvcmQiOmZhbHNlLCJfc2NoZW1hIjpudWxsLCJfc2NoZW1hRGVsaW1pdGVyIjoiIiwicmF3Ijp0cnVlLCJhdHRyaWJ1dGVzIjpbIm5hbWUiLCJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJpZCIsInJvbGUiXX0sImlzTmV3UmVjb3JkIjpmYWxzZSwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTYxMzIzMTAzN30.iO871jJlW9EPFxGvBVu4ZotVbLDsKCX8QVaLT0ijMHQ';

    private _httpOptions = {
        // headers: new HttpHeaders({Authorization: `Bearer ${this.token}`})
        // headers: new HttpHeaders({Authorization: `Bearer ${this.token2}`})
        headers: new HttpHeaders()
    };

    constructor(private readonly _http: HttpClient) {
    }

    public getUsersData(): Observable<IUser[]> {
        console.log(this._httpOptions.headers);
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

    public login(login: string, password: string): Observable<IServerResponse> {
        return this._http.post<IServerResponse>(this._loginUrl, {login, password}).pipe(
            tap((data: IServerResponse) => {
                    console.log(data.message);
                    this._httpOptions.headers = new HttpHeaders({Authorization: `Bearer ${JSON.parse(data.message)}`});
                    console.log(this._httpOptions.headers);
                }
            )
        );
    }
}
