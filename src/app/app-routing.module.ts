import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NewUserPageComponent} from './pages/new-user-page/new-user-page.component';
import {UserPageComponent} from './pages/user-page/user-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {EditUserPageComponent} from './pages/edit-user-page/edit-user-page.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent},
    {path: 'user/new', component: NewUserPageComponent},
    {path: 'user/:id', component: UserPageComponent},
    {path: 'edit/:id', component: EditUserPageComponent},
    {path: 'not-found', component: NotFoundPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
