import { JobsComponent } from './jobs/containers/jobs/jobs.component';
import { ShowComponent } from './show/containers/show/show.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NewestComponent } from './newest/containers/newest/newest.component';
import { CommentsComponent } from './comments/containers/comments/comments.component';
import { AskComponent } from './ask/containers/ask/ask.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/newest',
    pathMatch: 'full',
  },
  {
    path: 'newest',
    component: NewestComponent
  },
  {
    path: 'comments',
    component: CommentsComponent
  },
  {
    path: 'show',
    component: ShowComponent
  },
  {
    path: 'ask',
    component: AskComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
