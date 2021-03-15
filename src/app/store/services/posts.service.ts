import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IServerResponse} from '../../interfaces/server-responses.interface';
import {AuthService} from './auth.service';
import {ICreatePostData, IPost} from '../../interfaces/post.interface';

@Injectable()
export class PostsService {

    private readonly _postsUrl: string = 'http://localhost:3000/api/posts';

    constructor(
        private readonly _http: HttpClient,
        private readonly _authService: AuthService
    ) {}

    public getPostsData(userUUID: string): Observable<IPost[]> {
        return this._http.get<IPost[]>(`${this._postsUrl}?userUUID=${userUUID}`);
    }

    public updatePostData(newData: ICreatePostData, postUUID: string): Observable<IServerResponse> {
        return this._http.put<IServerResponse>(`${this._postsUrl}/${postUUID}`, newData);
    }

    public makeLike(postUUID: string): Observable<IServerResponse> {
        const params: HttpParams = new HttpParams();
        params.append('rollback', 'false');
        return this._http.get<IServerResponse>(`${this._postsUrl}/${postUUID}`, { observe: 'body', params });
    }

    public setProfilePostsData(posts: IPost[]): void {
        localStorage.setItem('profilePosts', JSON.stringify(posts));
    }
}
