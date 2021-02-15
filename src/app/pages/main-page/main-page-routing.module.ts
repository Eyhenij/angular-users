import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersPageComponent} from '../users-page/users-page.component';
import {UserPageComponent} from '../user-page/user-page.component';
import {EditUserPageComponent} from '../edit-user-page/edit-user-page.component';
import {MainPageComponent} from './main-page.component';

const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
        children: [
            {path: 'users', component: UsersPageComponent},
            {path: 'user/:id', component: UserPageComponent}, // проверить есть ли нужен ли этот путь
            {path: 'edit/:id', component: EditUserPageComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainPageRoutingModule {}
