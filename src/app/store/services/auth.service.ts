import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IServerAuthResponse} from '../../interfaces/server-responses.interface';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthService {

    private readonly _authUrl = 'http://localhost:3000/api/login';

    constructor(private readonly _http: HttpClient) {}

    public logIn(login: string, password: string): Observable<IServerAuthResponse> {
        return this._http.post<IServerAuthResponse>(this._authUrl, {login, password})
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
}
