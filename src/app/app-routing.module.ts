import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NewUserPageComponent} from './pages/new-user-page/new-user-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {AuthGuard} from './guards/auth.guard';
import {LoginPageComponent} from './pages/login-page/login-page.component';

const routes: Routes = [
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: NewUserPageComponent},
    {path: 'not-found', component: NotFoundPageComponent},
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {
        path: 'main',
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
