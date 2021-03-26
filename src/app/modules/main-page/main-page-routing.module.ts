import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EditUserPageComponent} from './components/edit-user-page/edit-user-page.component';
import {MainPageComponent} from './main-page.component';
import {UserPageComponent} from './components/user-page/user-page.component';
import {AuthGuard} from '../../guards/auth.guard';
import {UsersPageComponent} from './components/users-page/users-page.component';
import {PostsComponent} from './components/posts-page/posts.component';

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: MainPageComponent,
        children: [
            {path: '', component: PostsComponent},
            {path: 'users', component: UsersPageComponent},
            {path: 'user/:id', component: UserPageComponent},
            {path: 'edit/:id', component: EditUserPageComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainPageRoutingModule {}
