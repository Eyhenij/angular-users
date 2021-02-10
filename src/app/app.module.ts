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
import {NewUserPageComponent} from './pages/new-user-page/new-user-page.component';
import {UserPageComponent} from './pages/user-page/user-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {UnknownDataPageComponent} from './pages/unknown-data-page/unknown-data-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import { EditUserPageComponent } from './pages/edit-user-page/edit-user-page.component';

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
        UnknownDataPageComponent,
        NotFoundPageComponent,
        EditUserPageComponent
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
