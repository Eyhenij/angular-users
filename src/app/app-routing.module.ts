import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NewUserPageComponent} from './pages/new-user-page/new-user-page.component';
import {UserPageComponent} from './pages/user-page/user-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {EditUserPageComponent} from './pages/edit-user-page/edit-user-page.component';
import {AuthGuard} from './guards/auth.guard';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {UsersPageComponent} from './pages/users-page/users-page.component';
import {MainPageComponent} from './pages/main-page/main-page.component';

const routes: Routes = [
    // {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginPageComponent},
    {
        path: '',
        canActivate: [AuthGuard],
        component: MainPageComponent,
        children: [
            {path: 'users', canActivate: [AuthGuard], component: UsersPageComponent},
            {path: 'user/new', canActivate: [AuthGuard], component: NewUserPageComponent},
            {path: 'user/:id', canActivate: [AuthGuard], component: UserPageComponent},
            {path: 'edit/:id', canActivate: [AuthGuard], component: EditUserPageComponent},
            {path: 'not-found', canActivate: [AuthGuard], component: NotFoundPageComponent}
        ]
    },

    {path: '**', redirectTo: 'not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
