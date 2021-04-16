import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { IPost } from '../../../interfaces/post.interface';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { getProfilePostsSelector, getTotalPostsCountSelector } from '../../../store/posts/posts.selectors';
import { createPostAction, getCurrentPostsAction } from '../../../store/posts/posts.actions';
import { getUserUUIDSelector } from '../../../store/profile/profile.selectors';

@Component({
    selector: 'app-posts-page',
    templateUrl: './posts-page.component.html',
    styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit, OnDestroy {
    @ViewChild(MatPaginator)
    private readonly _paginator: MatPaginator;

    private readonly _dataSource: MatTableDataSource<any> = new MatTableDataSource();
    private _subscription: SubscriptionLike[] = [];
    private _userUUID: string = null;

    public totalPostsCount$: Observable<number> = this._store$.select(getTotalPostsCountSelector);
    public currentPosts$: Observable<IPost[]> = this._store$.select(getProfilePostsSelector);
    public pageSize = 3;
    public currentPage = 1;
    public isCreateMode = false;

    constructor(
        private readonly _store$: Store,
        private readonly _changeDetector: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this._dataSource.paginator = this._paginator;
        this._subscription.push(this._store$
            .select(getUserUUIDSelector)
            .subscribe((userUUID: string): void => {
                this._userUUID = userUUID;
                this._getCurrentPosts();
            })
        );
    }

    public onPageChange(event: PageEvent): void {
        this.pageSize = event.pageSize;
        this.currentPage = event.pageIndex + 1;
        this._getCurrentPosts();
    }

    public async createNewPost(newPostData: { title: string, content: string }): Promise<void> {
        this._store$.dispatch(createPostAction({ newData: { userUUID: this._userUUID, ...newPostData } }));
        this.isCreateMode = false;
        this._getCurrentPosts();
    }

    public onDeletePost(): void {
        this._getCurrentPosts();
    }

    private _getCurrentPosts(): void {
        this._changeDetector.markForCheck();
        this._store$.dispatch(getCurrentPostsAction({
            currentData: {
                userUUID: this._userUUID,
                currentPage: this.currentPage,
                pageSize: this.pageSize
            }
        }));
    }

    ngOnDestroy(): void {
        this._subscription.forEach((subscription: SubscriptionLike): void => subscription.unsubscribe());
        this._subscription = [];
    }
}
