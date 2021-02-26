import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

import {MainPageComponent} from './main-page.component';
import {UsersPageComponent} from './content/users-page/users-page.component';
import {UserPageComponent} from './content/user-page/user-page.component';
import {EditUserPageComponent} from './content/edit-user-page/edit-user-page.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ContentComponent} from './content/content.component';
import {MaterialModule} from '../../material/material.module';

import {UserFormComponent} from '../../forms/user-form/user-form.component';
import {MainPageRoutingModule} from './main-page-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserCardComponent} from './content/user-card/user-card.component';
import {ProfileComponent} from './content/profile/profile.component';
import {ProfileContainerComponent} from './content/profile/profile.container.component';

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
        ProfileContainerComponent
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
