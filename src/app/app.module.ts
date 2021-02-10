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
import { ContentCardComponent } from './content/content-card/content-card.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SidebarComponent,
        ContentComponent,
        OnLoadingComponent,
        ContentCardComponent
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
