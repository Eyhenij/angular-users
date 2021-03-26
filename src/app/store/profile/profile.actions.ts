import {createAction, props} from '@ngrx/store';
import {IProfile} from '../../interfaces/profile.interface';

export const setProfileDataAction = createAction('[PROFILE_SET_DATA]', props<{profile: IProfile}>());
export const setProfileDataActionSuccess = createAction('[PROFILE_SET_DATA_SUCCESS]', props<{profile: IProfile}>());
export const setProfileDataActionFailure = createAction('[PROFILE_SET_DATA_FAILURE]', props<{message: string, success: boolean}>());
