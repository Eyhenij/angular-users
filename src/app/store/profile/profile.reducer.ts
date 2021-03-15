import {IProfileState} from '../app.store';
import {Action, createReducer, on} from '@ngrx/store';
import * as profileActions from './profile.actions';
import {IServerResponse} from '../../interfaces/server-responses.interface';


export const initialState: IProfileState = {
    onLoading: false,
    name: localStorage.getItem('profileName'),
    login: localStorage.getItem('profileLogin'),
    email: localStorage.getItem('profileEmail'),
    role: localStorage.getItem('profileRole'),
    userUUID: localStorage.getItem('profileUUID'),
    status: 'offline',
    followers: [],
    serverError: {
        message: '',
        success: true
    }
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
            ...profile,
            onLoading: false,
            status: 'online'
        })
    ),
    on(profileActions.setProfileDataActionFailure,
        (state: IProfileState, serverResponse: IServerResponse) => ({
            ...state,
            onLoading: false,
            serverError: serverResponse
        })
    )
);

export const profileReducer = (state: IProfileState, action: Action) => {
    return _profileReducer(state, action);
};
