import { createFeatureSelector, createSelector } from '@ngrx/store';
import { COMMENTS_FEATURE_NODE, ICommentsState } from '../app.store';
import { ICommentContainer } from '../../interfaces/comment.interface';

const _commentsFeatureSelector = createFeatureSelector<ICommentsState>(COMMENTS_FEATURE_NODE);

export const getCommentsSelector = createSelector<ICommentsState, ICommentsState, ICommentContainer[]>(
    _commentsFeatureSelector,
    (state: ICommentsState): ICommentContainer[] => state.commentsContainer
);
