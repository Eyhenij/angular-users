import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

import {MainPageComponent} from './main-page.component';
import {UsersPageComponent} from '../users-page/users-page.component';
import {UserPageComponent} from '../user-page/user-page.component';
import {EditUserPageComponent} from '../edit-user-page/edit-user-page.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {ContentComponent} from '../content/content.component';
import {MaterialModule} from '../../material/material.module';

import {UserFormComponent} from '../../forms/user-form/user-form.component';
import {MainPageRoutingModule} from './main-page-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserCardComponent} from '../../forms/user-card/user-card.component';
import {ProfileComponent} from '../profile-page/profile.component';
import {ProfileContainerComponent} from '../profile-page/profile.container.component';
import {PostCardComponent} from '../../forms/post-card/post-card.component';

@NgModule({
    declarations: [
        MainPageComponent,
        SidebarComponent,
        ContentComponent,
        UsersPageComponent,
        EditUserPageComponent,
        UserPageComponent,
        UserFormComponent,
        UserCardComponent,
        ProfileComponent,
        ProfileContainerComponent,
        PostCardComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        MainPageRoutingModule,
        HttpClientModule,
        CommonModule
    ],
    exports: [
        UserFormComponent,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule
    ]
})
export class MainPageModule {}
