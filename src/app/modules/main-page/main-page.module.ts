import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainPageComponent} from './main-page.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {ContentComponent} from './components/content/content.component';
import {MaterialModule} from '../material/material.module';

import {MainPageRoutingModule} from './main-page-routing.module';
import {PostsModule} from '../posts/posts.module';
import {UsersModule} from '../users/users.module';
import {ProfileStoreModule} from '../../store/profile/profile-store.module';
import {UserFormComponent} from '../users/user-form/user-form.component';

@NgModule({
    declarations: [
        MainPageComponent,
        SidebarComponent,
        ContentComponent
    ],
    imports: [
        MaterialModule,
        CommonModule,
        MainPageRoutingModule,
        UsersModule,
        PostsModule,
        ProfileStoreModule
    ],
    exports: [UserFormComponent]
})
export class MainPageModule {}
