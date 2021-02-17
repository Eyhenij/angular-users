import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersPageComponent} from './content/users-page/users-page.component';
import {EditUserPageComponent} from './content/edit-user-page/edit-user-page.component';
import {MainPageComponent} from './main-page.component';
import {UserPageComponent} from './content/user-page/user-page.component';
import {ProfileComponent} from './content/profile/profile.component';
import {AuthGuard} from '../../guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: MainPageComponent,
        children: [
            {path: '', component: ProfileComponent},
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
