import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IPost} from '../../../../interfaces/post.interface';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Store} from '@ngrx/store';
import {Observable, Subscription, SubscriptionLike} from 'rxjs';
import {map} from 'rxjs/operators';
import {getProfilePostsSelector} from '../../../../store/posts/posts.selectors';
import {getPostsAction} from '../../../../store/posts/posts.actions';
import {getUserUUIDSelector} from '../../../../store/profile/profile.selectors';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
    private readonly _allPosts$: Observable<IPost[]> = this._store$.select(getProfilePostsSelector);
    private _subscription: SubscriptionLike = new Subscription();
    private _dataSource: MatTableDataSource<any> = new MatTableDataSource();

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
            .subscribe((userUUID: string): void => this._store$.dispatch(getPostsAction({ userUUID })));
    }

    ngOnDestroy(): void {
        this._subscription.unsubscribe();
        this._subscription = null;
    }
}
