import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ICreatePostData, IPost} from '../../../interfaces/post.interface';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Store} from '@ngrx/store';
import {Observable, SubscriptionLike} from 'rxjs';
import {getProfilePostsSelector} from '../../../store/posts/posts.selectors';
import {createPostAction, getPostsAction} from '../../../store/posts/posts.actions';
import {getUserUUIDSelector} from '../../../store/profile/profile.selectors';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-posts-page',
    templateUrl: './posts-page.component.html',
    styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit, OnDestroy {
    @ViewChild(MatPaginator)
    private readonly _paginator: MatPaginator;

    private _dataSource: MatTableDataSource<any> = new MatTableDataSource();
    private _subscription: SubscriptionLike[] = [];
    private _userUUID: string = null;
    private _allPosts: IPost[] = [];
    private _allPosts$: Observable<IPost[]> = this._store$.select(getProfilePostsSelector);

    public totalPostsCount: number = null;
    public totalPostsCount$: Observable<number> = this._allPosts$
        .pipe(
            map((posts: IPost[]): number => posts.length)
        );
    public currentPosts: IPost[] = [];
    public currentPosts$: Observable<IPost[]> = this._allPosts$
        .pipe(
            map((posts: IPost[]): IPost[] => {
                return posts.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
            })
        );
    public pageSize = 5;
    public currentPage = 1;
    public isCreateMode = false;

    constructor(private readonly _store$: Store) {}

    ngOnInit(): void {
        this._dataSource.paginator = this._paginator;
        this._subscription.push(this._store$
            .select(getUserUUIDSelector)
            .subscribe((userUUID: string): void => {
                this._userUUID = userUUID;
                this._store$.dispatch(getPostsAction({ userUUID }));
            })
        );
        this._subscription.push(this._store$
            .select(getProfilePostsSelector)
            .subscribe((posts: IPost[]): void => {
                this.totalPostsCount = posts.length;
                this._allPosts = posts;
                this.currentPosts = posts.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
            })
        );
    }

    public onPageChange(event: PageEvent): void {
        this.pageSize = event.pageSize;
        this.currentPage = event.pageIndex + 1;
        this.currentPosts = this._allPosts.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
        this.currentPosts$ = this._allPosts$
            .pipe(
                map((posts: IPost[]): IPost[] => {
                    return posts.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
                })
            );
    }

    public async createNewPost(newPostData): Promise<void> {
        const newData: ICreatePostData = { userUUID: this._userUUID, ...newPostData };
        this._store$.dispatch(createPostAction({ newData }));
        this.isCreateMode = false;
    }

    ngOnDestroy(): void {
        this._subscription.forEach((subscription: SubscriptionLike): void => subscription.unsubscribe());
        this._subscription = [];
    }
}
