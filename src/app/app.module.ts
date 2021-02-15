import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UsersService} from './services/users.service';
import {AuthService} from './services/auth.service';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {OnLoadingComponent} from './on-loading/on-loading.component';
import {NewUserPageComponent} from './pages/new-user-page/new-user-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';

import {RoleGuard} from './guards/role.guard';
import {AuthGuard} from './guards/auth.guard';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {MainPageModule} from './pages/main-page/main-page.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        OnLoadingComponent,
        NewUserPageComponent,
        NotFoundPageComponent,
        LoginPageComponent
    ],
    imports: [
        MainPageModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        UsersService,
        AuthService,
        RoleGuard,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
