import {createAction, props} from '@ngrx/store';
import {IUser} from '../../interfaces/user.interfaces';

export const setProfileDataAction = createAction('[Profile] set profile data', props<{profile: IUser}>());
export const setProfileDataActionSuccess = createAction('[Profile] set profile data success', props<{profile: IUser}>());
export const setProfileDataActionFailure = createAction('[Profile] set profile data failure', props<{message: string}>());
