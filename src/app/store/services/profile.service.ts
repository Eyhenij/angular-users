import { Injectable } from '@angular/core';
import {IUser} from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() {}

  public setProfileData(profile: IUser): void {
      console.log(profile);
      localStorage.setItem('profileName', profile.name);
      localStorage.setItem('profileLogin', profile.login);
      localStorage.setItem('profileEmail', profile.email);
      localStorage.setItem('profileRole', profile.role);
  }
}
