import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { NewestModule } from './newest/newest.module';
import { CommentsModule } from './comments/comments.module';
import { ShowModule } from './show/show.module';
import { AskModule } from './ask/ask.module';
import { JobsModule } from './jobs/jobs.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewestModule,
    CommentsModule,
    ShowModule,
    AskModule,
    JobsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
