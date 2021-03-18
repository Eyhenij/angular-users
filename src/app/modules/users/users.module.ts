import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {HttpClientModule} from '@angular/common/http';
import {UsersPageComponent} from './users-page/users-page.component';
import {EditUserPageComponent} from './edit-user-page/edit-user-page.component';
import {UserPageComponent} from './user-page/user-page.component';
import {UserFormComponent} from './user-form/user-form.component';
import {UserCardComponent} from './user-card/user-card.component';
import {UsersRoutingModule} from './users-routing.module';


@NgModule({
    declarations: [
        UsersPageComponent,
        EditUserPageComponent,
        UserPageComponent,
        UserFormComponent,
        UserCardComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        UsersRoutingModule,
        HttpClientModule,
        CommonModule
    ],
    exports: [
        UserFormComponent
    ]
})
export class UsersModule {
}
