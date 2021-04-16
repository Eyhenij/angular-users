import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {OnLoadingComponent} from './components/on-loading/on-loading.component';
import {RegisterUserPageComponent} from './components/register-user-page/register-user-page.component';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import {LoginPageComponent} from './components/login-page/login-page.component';

import {RoleGuard} from '../../guards/role.guard';
import {AuthGuard} from '../../guards/auth.guard';
import {AuthInterceptor} from '../../interceptors/auth.interceptor';
import {MainPageModule} from '../main-page/main-page.module';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';

import {AuthStoreModule} from '../../store/authorization/auth-store.module';
import {HeaderContainerComponent} from './components/header/header.container.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {QuillModule} from 'ngx-quill';
import {FateModule} from 'fate-editor';

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
        BrowserModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({}, {}),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        StoreRouterConnectingModule.forRoot(),
        EffectsModule.forRoot(),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        QuillModule.forRoot({

            theme: 'snow',

            // modules: {
            //     toolbar: [
            //         // ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            //         ['blockquote', 'code-block'],
            //         [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            //         [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            //         [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            //         [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            //         [{ 'direction': 'rtl' }],                         // text direction
            //         [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            //         [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            //         [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            //         [{ 'font': [] }],
            //         [{ 'align': [] }],
            //         // ['clean']
            //     ]
            // }

        }),
        FateModule,
        AppRoutingModule,
        MainPageModule,
        AuthStoreModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        RoleGuard,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
