import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private readonly _store$: Store) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('auth-token')) {
            request = request.clone({
                setHeaders: {
                    Authorization: localStorage.getItem('auth-token')
                }
            });
        }

        return next.handle(request);
    }
}
