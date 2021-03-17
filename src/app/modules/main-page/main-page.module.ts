import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

import {MainPageComponent} from './main-page.component';
import {UsersPageComponent} from './components/users-page/users-page.component';
import {UserPageComponent} from './components/user-page/user-page.component';
import {EditUserPageComponent} from './components/edit-user-page/edit-user-page.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {ContentComponent} from './components/content/content.component';
import {MaterialModule} from '../material/material.module';

import {UserFormComponent} from '../../forms/user/user-form/user-form.component';
import {MainPageRoutingModule} from './main-page-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserCardComponent} from '../../forms/user/user-card/user-card.component';
import {PostsModule} from '../posts/posts.module';

@NgModule({
    declarations: [
        MainPageComponent,
        SidebarComponent,
        ContentComponent,
        UsersPageComponent,
        EditUserPageComponent,
        UserPageComponent,
        UserFormComponent,
        UserCardComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        MainPageRoutingModule,
        HttpClientModule,
        CommonModule,
        PostsModule
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
