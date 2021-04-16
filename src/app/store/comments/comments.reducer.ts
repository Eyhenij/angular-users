import { ICommentsState } from '../app.store';
import { Action, createReducer, on } from '@ngrx/store';
import * as postsActions from './comments.actions';
import { IServerResponse } from '../../interfaces/server-responses.interface';
import {IComment, ICommentContainer} from '../../interfaces/comment.interface';

const initialState: ICommentsState = {
    onLoading: false,
    commentsContainer: [],
    selectedComment: null,
    serverError: null
};

const _commentsReducer = createReducer(
    initialState,
// ===================  GET ALL COMMENTS  ===================
    on(postsActions.getCommentsAction,
        (state: ICommentsState) => ({
            ...state,
            onLoading: true
        })
    ),
    on(postsActions.getCommentsActionSuccess,
        (state: ICommentsState, { commentsContainer }) => {
            const foo = (): ICommentContainer[] =>  {
                const doesContainerExist = state.commentsContainer.find((container: ICommentContainer): boolean => {
                    return container.parentUUID === commentsContainer.parentUUID;
                });
                if (doesContainerExist) {
                    return state.commentsContainer.map((container: ICommentContainer): ICommentContainer => {
                        if (container.parentUUID === commentsContainer.parentUUID) {
                            return { ...container, comments: commentsContainer.comments};
                        }
                        return container;
                    });
                } else {
                    return [...state.commentsContainer, commentsContainer];
                }
            };
            return {
                ...state,
                commentsContainer: foo(),
                onLoading: false
            };
        }
    ),
    on(postsActions.getCommentsActionFailure,
        (state: ICommentsState, serverResponse: IServerResponse) => ({
            ...state,
            onLoading: false,
            serverError: serverResponse
        })
    ),

// ===================  CREATE COMMENT  ===================
    on(postsActions.createCommentAction,
        (state: ICommentsState) => ({
            ...state,
            onLoading: true
        })
    ),
    on(postsActions.createCommentActionSuccess,
        (state: ICommentsState, { comment }) => ({
            ...state,
            commentsContainer: state.commentsContainer.map((container: ICommentContainer): ICommentContainer => {
                if (container.parentUUID === comment.parentUUID) {
                    return { ...container, comments: [comment, ...container.comments]};
                }
                return container;
            }),
            onLoading: false
        })
    ),
    on(postsActions.createCommentActionFailure,
        (state: ICommentsState, serverResponse: IServerResponse) => ({
            ...state,
            onLoading: false,
            serverError: serverResponse
        })
    ),

// ===================  UPDATE COMMENT  ===================
    on(postsActions.updateCommentAction,
        (state: ICommentsState, { newData, parentUUID }) => ({
            ...state,
            commentsContainer: state.commentsContainer.map((container: ICommentContainer): ICommentContainer => {
                if (container.parentUUID === parentUUID) {
                    return { ...container, comments: container.comments.map((comment: IComment): IComment => {
                            if (comment.commentUUID === newData.commentUUID) {
                                return { ...comment, content: newData.content };
                            }
                            return comment;
                        })
                    };
                }
                return container;
            }),
            onLoading: true
        })
    ),
    on(postsActions.updateCommentActionSuccess,
        (state: ICommentsState) => {
            return {
                ...state,
                onLoading: false
            };
        }
    ),
    on(postsActions.updateCommentActionFailure,
        (state: ICommentsState, serverResponse: IServerResponse) => ({
            ...state,
            onLoading: false,
            serverError: serverResponse
        })
    ),

// ===================  DELETE COMMENT  ===================
    on(postsActions.deleteCommentAction,
        (state: ICommentsState, { parentUUID, commentUUID }) => ({
            ...state,
            commentsContainer: state.commentsContainer.map((container: ICommentContainer): ICommentContainer => {
                if (container.parentUUID === parentUUID) {
                    return { ...container, comments: container.comments.filter((comment: IComment): boolean => {
                        return comment.commentUUID !== commentUUID;
                        })
                    };
                } else {
                    return container;
                }
            }),
            onLoading: true
        })
    ),
    on(postsActions.deleteCommentActionSuccess,
        (state: ICommentsState) => {
            return {
                ...state,
                onLoading: false
            };
        }
    ),
    on(postsActions.deleteCommentActionFailure,
        (state: ICommentsState, serverResponse: IServerResponse) => ({
            ...state,
            onLoading: false,
            serverError: serverResponse
        })
    )
);

export const commentsReducer = (state: ICommentsState, action: Action) => {
    return _commentsReducer(state, action);
};
