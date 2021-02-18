import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IServerResponse} from '../../interfaces/server-response.interface';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthService {

    private readonly _authUrl = 'http://localhost:3000/api/login';

    constructor(private readonly _http: HttpClient) {}

    public logIn(login: string, password: string): Observable<IServerResponse> {
        return this._http.post<IServerResponse>(this._authUrl, {login, password})
            .pipe(
                tap(({message}): void => {
                    localStorage.setItem('auth-token', message);
                    }
                )
            );
    }

    public logOut(): void {
        console.log('hello from authService!');
        localStorage.removeItem('auth-token');
    }
}
