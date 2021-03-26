import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersPageComponent} from './users-page/users-page.component';
import {EditUserPageComponent} from './edit-user-page/edit-user-page.component';
import {UserPageComponent} from './user-page/user-page.component';

const routes: Routes = [
    {path: '', component: UsersPageComponent},
    {path: 'user/:id', component: UserPageComponent},
    {path: 'edit/:id', component: EditUserPageComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {}
