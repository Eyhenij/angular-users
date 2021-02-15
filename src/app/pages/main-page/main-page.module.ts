import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

import {MainPageComponent} from './main-page.component';
import {UsersPageComponent} from '../users-page/users-page.component';
import {UserPageComponent} from '../user-page/user-page.component';
import {EditUserPageComponent} from '../edit-user-page/edit-user-page.component';
import {SidebarComponent} from '../../sidebar/sidebar.component';
import {ContentComponent} from '../../content/content.component';
import {MaterialModule} from '../../material/material.module';

import {UserFormComponent} from '../../forms/user-form/user-form.component';
import {MainPageRoutingModule} from './main-page-routing.module';

@NgModule({
    declarations: [
        MainPageComponent,
        SidebarComponent,
        ContentComponent,
        UsersPageComponent,
        EditUserPageComponent,
        UserPageComponent,
        UserFormComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        MainPageRoutingModule,
        HttpClientModule,
        CommonModule
    ],
    exports: [
        UserFormComponent,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ]
})
export class MainPageModule {
}
