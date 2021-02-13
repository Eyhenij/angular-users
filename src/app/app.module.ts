import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {UsersService} from './services/users.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ContentComponent} from './content/content.component';
import {OnLoadingComponent} from './on-loading/on-loading.component';
import {UserPageComponent} from './pages/user-page/user-page.component';
import {EditUserPageComponent} from './pages/edit-user-page/edit-user-page.component';
import {NewUserPageComponent} from './pages/new-user-page/new-user-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';

import {MaterialModule} from './material/material.module';
import {RoleGuard} from './guards/role.guard';
import {AuthGuard} from './guards/auth.guard';
import {AuthService} from './services/auth.service';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SidebarComponent,
        ContentComponent,
        OnLoadingComponent,
        NewUserPageComponent,
        UserPageComponent,
        NotFoundPageComponent,
        EditUserPageComponent,
        LoginPageComponent,
        UsersPageComponent,
        MainPageComponent
    ],
    imports: [
        MaterialModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
    ],
    providers: [
        UsersService,
        AuthService,
        RoleGuard,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
