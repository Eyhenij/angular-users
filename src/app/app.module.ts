import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ContentComponent} from './content/content.component';
import {OnLoadingComponent} from './on-loading/on-loading.component';
import {UsersService} from './users.service';
import {HttpClientModule} from '@angular/common/http';
import {NewUserPageComponent} from './content/new-user-page/new-user-page.component';
import {UserPageComponent} from './content/user-page/user-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UnknownDataPageComponent } from './content/unknown-data-page/unknown-data-page.component';

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
        UnknownDataPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [UsersService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
