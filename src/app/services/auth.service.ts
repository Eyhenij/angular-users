import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IServerResponse} from '../interfaces/server-response.interface';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthService {

    private readonly _authUrl = 'http://localhost:3000/api/login';
    private _token: string;

     constructor(private readonly _http: HttpClient) {}

     public isAuth(): boolean {
        return true;
     }

    public login(login: string, password: string): Observable<any> {
        return this._http.post<IServerResponse>(this._authUrl, {login, password})
            .pipe(
                tap((data: IServerResponse): any => {
                    localStorage.setItem('auth-token', data.message);
                    this.setToken(data.message);
                    console.log(this._token);
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

}
