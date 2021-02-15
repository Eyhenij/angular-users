import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsersService} from './services/users.service';
import {MaterialModule} from './material/material.module';
import {AuthService} from './services/auth.service';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ContentComponent} from './content/content.component';
import {OnLoadingComponent} from './on-loading/on-loading.component';
import {UserPageComponent} from './pages/user-page/user-page.component';
import {EditUserPageComponent} from './pages/edit-user-page/edit-user-page.component';
import {NewUserPageComponent} from './pages/new-user-page/new-user-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {UsersPageComponent} from './pages/users-page/users-page.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {UserFormComponent} from './forms/user-form/user-form.component';

import {RoleGuard} from './guards/role.guard';
import {AuthGuard} from './guards/auth.guard';
import {AuthInterceptor} from './interceptors/auth.interceptor';

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
        MainPageComponent,
        UserFormComponent
    ],
    imports: [
        MaterialModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        {
          provide: HTTP_INTERCEPTORS,
          multi: true,
          useClass: AuthInterceptor
        },
        UsersService,
        AuthService,
        RoleGuard,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
