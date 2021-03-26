import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IServerResponse} from '../../interfaces/server-responses.interface';
import {IComment, ICommentContainer, ICreateCommentData, IUpdateCommentData} from '../../interfaces/comment.interface';

@Injectable()
export class CommentsService {
    private readonly _commentsUrl: string = 'http://localhost:3000/api/comments';

    constructor(private readonly _http: HttpClient) {}

    public getAllComments(parentUUID: string): Observable<ICommentContainer> {
        return this._http.get<ICommentContainer>(`${this._commentsUrl}?parentUUID=${parentUUID}`);
    }

    public createComment(newData: ICreateCommentData): Observable<IComment> {
        return this._http.post<IComment>(`${this._commentsUrl}`, newData);
    }

    public updateComment(newData: IUpdateCommentData): Observable<IServerResponse> {
        return this._http.put<IServerResponse>(`${this._commentsUrl}`, newData);
    }

    public deleteComment(commentUUID: string): Observable<IServerResponse> {
        return this._http.delete<IServerResponse>(`${this._commentsUrl}?commentUUID=${commentUUID}`);
    }

    public setCommentsData(comments: IComment[], parentUUID: string): void {
        localStorage.setItem(`comments${parentUUID}`, JSON.stringify(comments));
    }
}
