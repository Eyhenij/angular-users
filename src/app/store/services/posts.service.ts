import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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

    public getAllProfilePosts(userUUID: string): Observable<IPost[]> {
        return this._http.get<IPost[]>(`${this._postsUrl}?userUUID=${userUUID}`);
    }

    public getOneProfilePost(userUUID: string, postUUID: string): Observable<IPost> {
        return this._http.get<IPost>(`${this._postsUrl}/${userUUID}?postUUID=${postUUID}`);
    }

    public createNewPost(newData: ICreatePostData): Observable<IPost> {
        return this._http.post<IPost>(`${this._postsUrl}`, newData);
    }

    public updatePostData(newData: ICreatePostData, postUUID: string): Observable<IServerResponse> {
        return this._http.put<IServerResponse>(`${this._postsUrl}/${postUUID}`, newData);
    }

    public deletePost(postUUID: string): Observable<IServerResponse> {
        return this._http.delete<IServerResponse>(`${this._postsUrl}/${postUUID}`);
    }

    public makeLike(postUUID: string, rollback: boolean): Observable<IServerResponse> {
        return this._http.put<IServerResponse>(`${this._postsUrl}/like/${postUUID}?rollback=${rollback}`, null);
    }

    public makeDisLike(postUUID: string, rollback: boolean): Observable<IServerResponse> {
        return this._http.put<IServerResponse>(`${this._postsUrl}/dislike/${postUUID}?rollback=${rollback}`, null);
    }

    public setProfilePostsData(posts: IPost[]): void {
        localStorage.setItem('profilePosts', JSON.stringify(posts));
    }
}
