import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IServerAuthResponse} from '../../interfaces/server-responses.interface';
import {tap} from 'rxjs/operators';
import {IUser, IUserForPost} from '../../interfaces/user.interfaces';

@Injectable()
export class AuthService {

    private readonly _loginUrl = 'http://localhost:3000/api/login';
    private readonly _registerUrl = 'http://localhost:3000/api/register';

    constructor(private readonly _http: HttpClient) {}

    public logIn(login: string, password: string): Observable<IServerAuthResponse> {
        return this._http.post<IServerAuthResponse>(this._loginUrl, {login, password})
            .pipe(
                tap((serverResponse: IServerAuthResponse): void => {
                    localStorage.setItem('auth-token', serverResponse.token);
                    }
                )
            );
    }

    public logOut(): void {
        localStorage.clear();
    }

    public register(newUserData: IUserForPost): Observable<IUser> {
        return this._http.post<IUser>(this._registerUrl, newUserData);
    }
}
