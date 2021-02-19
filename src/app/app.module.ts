import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UsersService} from './store/services/users.service';
import {AuthService} from './store/services/auth.service';

import {AppComponent} from './app.component';
import {HeaderComponent} from './pages/header/header.component';
import {OnLoadingComponent} from './pages/on-loading/on-loading.component';
import {RegisterUserPageComponent} from './pages/register-user-page/register-user-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';

import {RoleGuard} from './guards/role.guard';
import {AuthGuard} from './guards/auth.guard';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {MainPageModule} from './pages/main-page/main-page.module';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';

import {AuthStoreModule} from './store/authorization/auth-store.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        OnLoadingComponent,
        RegisterUserPageComponent,
        NotFoundPageComponent,
        LoginPageComponent
    ],
    imports: [
        MainPageModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot({}, {}),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        EffectsModule.forRoot([]),
        StoreRouterConnectingModule.forRoot(),
        AuthStoreModule
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
