import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainPageComponent} from './main-page.component';
import {AuthGuard} from '../../guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: MainPageComponent,
        children: [
            {path: '', redirectTo: 'posts', pathMatch: 'full'},
            {
                path: 'users',
                loadChildren: () => import('../users/users.module').then((m) => m.UsersModule)
            },
            {
                path: 'posts',
                loadChildren: () => import('../posts/posts.module').then((m) => m.PostsModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainPageRoutingModule {}
