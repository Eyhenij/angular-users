import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IPostsState, POSTS_FEATURE_NODE} from '../app.store';
import {IPost} from '../../interfaces/post.interface';


const _postsFeatureSelector = createFeatureSelector<IPostsState>(POSTS_FEATURE_NODE);

export const getProfilePostsSelector = createSelector<IPostsState, IPostsState, IPost[]>(
    _postsFeatureSelector,
    (state: IPostsState): IPost[] => state.posts
);
