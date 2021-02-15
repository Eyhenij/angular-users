import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IServerResponse} from '../interfaces/server-response.interface';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthService {

    private readonly _authUrl = 'http://localhost:3000/api/login';
    private _token: string = null;

    constructor(private readonly _http: HttpClient) {}

    public logIn(login: string, password: string): Observable<IServerResponse> {
        return this._http.post<IServerResponse>(this._authUrl, {login, password})
            .pipe(
                tap(({message}): void => {
                        localStorage.setItem('auth-token', message);
                        this.setToken(message);
                    }
                )
            );
    }

    public getToken(): string {
        return this._token;
    }

    public setToken(token: string): void {
        this._token = token;
    }

    public isAuthorized(): boolean {
        return !!this._token;
    }

    public logOut(): void {
        this.setToken(null);
        localStorage.removeItem('auth-token');
    }

}
