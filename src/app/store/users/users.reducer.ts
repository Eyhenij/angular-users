import {Action, createReducer, on} from '@ngrx/store';
import * as usersActions from './users.actions';
import {IServerResponse} from '../../interfaces/server-responses.interface';
import {IUsersState} from '../app.store';


const initialState: IUsersState = {
    onLoading: false,
    users: [],
    selectedUser: null,
    serverError: null
};

const _usersReducer = createReducer(
    initialState,
// ===================  GET ALL USERS  ===================
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
            onLoading: false,
            serverError: serverResponse.message
        })
    ),

// ===================  GET USER BY ID  ===================
    on(usersActions.getUserByIdAction,
        (state: IUsersState) => ({
            ...state,
            onLoading: true,
        })
    ),
    on(usersActions.getUserByIdActionSuccess,
        (state: IUsersState, {user}) => ({
            ...state,
            onLoading: false,
            selectedUser: user
        })
    ),
    on(usersActions.getUserByIdActionFailure,
        (state: IUsersState, serverResponse: IServerResponse) => ({
            ...state,
            onLoading: false,
            serverError: serverResponse.message
        })
    ),

// ===================  DELETE USER BY ID  ===================
    on(usersActions.deleteUserByIdAction,
        (state: IUsersState) => ({
            ...state,
            onLoading: true,
        })
    ),
    on(usersActions.deleteUserByIdActionSuccess,
        (state: IUsersState) => ({
            ...state,
            onLoading: false
        })
    ),
    on(usersActions.deleteUserByIdActionFailure,
        (state: IUsersState, serverResponse: IServerResponse) => ({
            ...state,
            onLoading: false,
            serverError: serverResponse.message
        })
    ),

// ===================  UPDATE USER DATA BY ID  ===================
    on(usersActions.updateUserDataAction,
        (state: IUsersState) => ({
            ...state,
            onLoading: true,
        })
    ),
    on(usersActions.updateUserDataActionSuccess,
        (state: IUsersState) => ({
            ...state,
            onLoading: false
        })
    ),
    on(usersActions.updateUserDataActionFailure,
        (state: IUsersState, serverResponse: IServerResponse) => ({
            ...state,
            onLoading: false,
            serverError: serverResponse.message
        })
    ),

// ===================  CREATE NEW USER  ===================
    on(usersActions.createUserAction,
        (state: IUsersState) => ({
            ...state,
            onLoading: true,
        })
    ),
    on(usersActions.createUserActionSuccess,
        (state: IUsersState) => ({
            ...state,
            onLoading: false
        })
    ),
    on(usersActions.createUserActionFailure,
        (state: IUsersState, serverResponse: IServerResponse) => ({
            ...state,
            onLoading: false,
            serverError: serverResponse.message
        })
    )
);

export const usersReducer = (state: IUsersState, action: Action) => {
    return _usersReducer(state, action);
};
