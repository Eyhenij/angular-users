import {IProfileState} from '../app.store';
import {Action, createReducer, on} from '@ngrx/store';
import * as profileActions from './profile.actions';


const initialState: IProfileState = {
    onLoading: false,
    name: localStorage.getItem('profileName'),
    login: localStorage.getItem('profileLogin'),
    email: localStorage.getItem('profileEmail'),
    role: '',
    followers: [],
    posts: [],
    serverError: ''
};

const _profileReducer = createReducer(
    initialState,
    on(profileActions.setProfileDataAction,
        (state: IProfileState) => ({
            ...state,
            onLoading: true
        })
    ),
    on(profileActions.setProfileDataActionSuccess,
        (state: IProfileState, {profile}) => ({
            ...state,
            onLoading: false,
            name: profile.name,
            login: profile.login,
            email: profile.email,
            role: profile.role
        })
    ),
    on(profileActions.setProfileDataActionFailure,
        (state: IProfileState, {message}) => ({
            ...state,
            onLoading: false,
            serverError: message
        })
    )
);

export const profileReducer = (state: IProfileState, action: Action) => {
    return _profileReducer(state, action);
};
