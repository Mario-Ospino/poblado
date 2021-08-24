import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';


const routes: Routes = [
  {path: '', component: HomeComponent,
children:[
  {path:'listar',component:ViewUsersComponent},
  {path:'crear',component:CreateUserComponent},
  {path:'modificar',component:UpdateUserComponent},
]},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
