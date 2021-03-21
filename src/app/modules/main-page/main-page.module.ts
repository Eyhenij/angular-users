import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

import {MainPageComponent} from './main-page.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {ContentComponent} from './components/content/content.component';
import {MaterialModule} from '../material/material.module';

import {UserFormComponent} from '../users/user-form/user-form.component';
import {MainPageRoutingModule} from './main-page-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PostsModule} from '../posts/posts.module';
import {UsersModule} from '../users/users.module';
import {CommentsModule} from '../comments/comments.module';

@NgModule({
    declarations: [
        MainPageComponent,
        SidebarComponent,
        ContentComponent,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        MainPageRoutingModule,
        HttpClientModule,
        CommonModule,
        UsersModule,
        PostsModule,
        CommentsModule
    ],
    exports: [
        UserFormComponent,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ]
})
export class MainPageModule {}
