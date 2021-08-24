import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path:'',
  component: LayoutComponent,
  pathMatch: 'full',
  children: [
    {path:'',loadChildren: () => import('./home/home.module').then( m => m.HomeModule)},
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
