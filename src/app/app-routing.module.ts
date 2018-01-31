import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NewestComponent } from './newest/containers/newest/newest.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/newest',
    pathMatch: 'full',
  },
  {
    path: 'newest',
    component: NewestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
