import {IUser} from '../../interfaces/user.interface';
import {createReducer, on} from '@ngrx/store';
import * as usersActions from './users.actions';
import {IServerResponse} from '../../interfaces/server-response.interface';


export const USERS_FEATURE_NODE = 'users';
export interface IUsersState {
    onLoading: boolean;
    users: IUser[];
    serverError?: string;
}
const initialState: IUsersState = {
    onLoading: false,
    users: [],
    serverError: null
};

const _usersReducer = createReducer(
    initialState,
    on(usersActions.getUsersAction,
        (state: IUsersState) => ({
            ...state,
            onLoading: true
        })
    ),
    on(usersActions.getUsersActionSuccess,
        (state: IUsersState, {users}) => ({
            ...state,
            onLoading: false,
            users: [...users]
        })
    ),
    on(usersActions.getUsersActionFailure,
        (state: IUsersState, serverResponse: IServerResponse) => ({
            ...state,
            serverError: serverResponse.message
        })
    )
);

export const usersReducer = (state, action) => {
    return _usersReducer(state, action);
};
