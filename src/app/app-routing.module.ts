import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewUserPageComponent} from './content/new-user-page/new-user-page.component';
import {UserPageComponent} from './content/user-page/user-page.component';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
    {path: 'home', component: HomePageComponent},
    {path: 'user/new', component: NewUserPageComponent},
    {path: 'user/:id', component: UserPageComponent},
    {path: 'user/unknownData', component: UserPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
