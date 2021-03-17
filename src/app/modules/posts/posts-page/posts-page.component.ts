import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ICreatePostData, IPost} from '../../../interfaces/post.interface';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Store} from '@ngrx/store';
import {Observable, Subscription, SubscriptionLike} from 'rxjs';
import {map} from 'rxjs/operators';
import {getProfilePostsSelector} from '../../../store/posts/posts.selectors';
import {createPostAction, getPostsAction} from '../../../store/posts/posts.actions';
import {getUserUUIDSelector} from '../../../store/profile/profile.selectors';

@Component({
    selector: 'app-posts-page',
    templateUrl: './posts-page.component.html',
    styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit, OnDestroy {
    private readonly _allPosts$: Observable<IPost[]> = this._store$.select(getProfilePostsSelector);
    private _subscription: SubscriptionLike = new Subscription();
    private _dataSource: MatTableDataSource<any> = new MatTableDataSource();
    private _userUUID: string = null;

    public totalPostsCount$: Observable<number> = this._allPosts$.pipe(
        map((posts: IPost[]): number => posts.length)
    );
    public posts$: Observable<IPost[]> = this._allPosts$.pipe(
        map((posts: IPost[]): IPost[] => {
            return posts.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
        })
    );
    public pageSize = 2;
    public currentPage = 1;
    public isCreateMode = false;

    @ViewChild(MatPaginator)
    private readonly _paginator: MatPaginator;

    constructor(private readonly _store$: Store) {}

    ngOnInit(): void {
        this.getUserUUID();
        this._dataSource.paginator = this._paginator;
    }

    public onPageChange(event: PageEvent): void {
        this.pageSize = event.pageSize;
        this.currentPage = event.pageIndex + 1;
        this.posts$ = this._allPosts$.pipe(
            map((posts: IPost[]): IPost[] => {
                return posts.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
            })
        );
    }

    public getUserUUID(): void {
        this._subscription = this._store$
            .select(getUserUUIDSelector)
            .subscribe((userUUID: string): void => {
                this._userUUID = userUUID;
                this._store$.dispatch(getPostsAction({ userUUID }));
            });
    }

    public async createNewPost(postData): Promise<void> {
        const newData: ICreatePostData = {
            userUUID: this._userUUID,
            ...postData
        };
        this._store$.dispatch(createPostAction({ newData }));
        this.isCreateMode = false;
    }

    ngOnDestroy(): void {
        this._subscription.unsubscribe();
        this._subscription = null;
    }
}
