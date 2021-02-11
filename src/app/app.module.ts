import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {UsersService} from './users.service';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ContentComponent} from './content/content.component';
import {OnLoadingComponent} from './on-loading/on-loading.component';
import {UserPageComponent} from './pages/user-page/user-page.component';
import {EditUserPageComponent} from './pages/edit-user-page/edit-user-page.component';
import {NewUserPageComponent} from './pages/new-user-page/new-user-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from './material/material.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SidebarComponent,
        ContentComponent,
        OnLoadingComponent,
        NewUserPageComponent,
        UserPageComponent,
        HomePageComponent,
        NotFoundPageComponent,
        EditUserPageComponent
    ],
    imports: [
        MaterialModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule
    ],
    providers: [UsersService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
