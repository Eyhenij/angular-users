import { Injectable } from '@angular/core';
import {IProfile} from '../../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() {}

  public setProfileData(profile: IProfile): void {
      localStorage.setItem('profileName', profile.name);
      localStorage.setItem('profileLogin', profile.login);
      localStorage.setItem('profileEmail', profile.email);
      localStorage.setItem('profileRole', profile.role);
      localStorage.setItem('profileUUID', profile.userUUID);
  }
}
