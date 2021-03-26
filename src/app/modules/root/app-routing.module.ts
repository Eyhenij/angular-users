import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RegisterUserPageComponent} from '../authorization/components/register-user-page/register-user-page.component';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import {AuthGuard} from '../../guards/auth.guard';
import {LoginPageComponent} from '../authorization/components/login-page/login-page.component';
import {StoreModule} from '@ngrx/store';
import {DEFAULT_ROUTER_FEATURENAME, routerReducer} from '@ngrx/router-store';

const routes: Routes = [
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterUserPageComponent},
    {path: 'not-found', component: NotFoundPageComponent},
    {
        path: '',
        canLoad: [AuthGuard],
        loadChildren: () => import('../main-page/main-page.module').then((m) => m.MainPageModule)
    },
    {path: '**', redirectTo: 'not-found'}
];

@NgModule({
    imports: [
        StoreModule.forFeature(DEFAULT_ROUTER_FEATURENAME, routerReducer),
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
