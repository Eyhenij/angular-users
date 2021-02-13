import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {

    private readonly _authUrl = 'http://localhost:3000/api/login';

     constructor(private readonly _http: HttpClient) {}

     public isAuth(): boolean {
        return true;
     }

}
