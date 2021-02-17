import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RegisterUserPageComponent} from './pages/register-user-page/register-user-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {AuthGuard} from './guards/auth.guard';
import {LoginPageComponent} from './pages/login-page/login-page.component';

const routes: Routes = [
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterUserPageComponent},
    {path: 'not-found', component: NotFoundPageComponent},
    // {path: '', redirectTo: 'main', pathMatch: 'full'},
    {
        path: '',
        canLoad: [AuthGuard],
        loadChildren: () => import('./pages/main-page/main-page.module').then((m) => m.MainPageModule)
    },
    {path: '**', redirectTo: 'not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
