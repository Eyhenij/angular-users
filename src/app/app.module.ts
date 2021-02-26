import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UsersService} from './store/services/users.service';
import {AuthService} from './store/services/auth.service';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {OnLoadingComponent} from './components/on-loading/on-loading.component';
import {RegisterUserPageComponent} from './components/register-user-page/register-user-page.component';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import {LoginPageComponent} from './components/login-page/login-page.component';

import {RoleGuard} from './guards/role.guard';
import {AuthGuard} from './guards/auth.guard';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {MainPageModule} from './components/main-page/main-page.module';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';

import {AuthStoreModule} from './store/authorization/auth-store.module';
import {UsersStoreModule} from './store/users/users-store.module';
import {ProfileStoreModule} from './store/profile/profile-store.module';
import {HeaderContainerComponent} from './components/header/header.container.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HeaderContainerComponent,
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
        AuthStoreModule,
        UsersStoreModule,
        ProfileStoreModule
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
