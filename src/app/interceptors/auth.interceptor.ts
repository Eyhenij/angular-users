import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {getAuthTokenSelector} from '../store/authorization/auth.selectors';
import {first, switchMap} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private readonly _store$: Store) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this._store$.select(getAuthTokenSelector)
            .pipe(
                first(),
                switchMap((authToken: string) => {
                    if (authToken) {
                        request = request.clone({
                            setHeaders: {
                                Authorization: authToken
                            }
                        });
                    }
                    return next.handle(request);
                })
            );
    }
}
