import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';
import * as moment from 'moment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { NewestModule } from './newest/newest.module';
import { CommentsModule } from './comments/comments.module';
import { ShowModule } from './show/show.module';
import { AskModule } from './ask/ask.module';
import { JobsModule } from './jobs/jobs.module';
import { ApiService } from './api.service';

const apiService = new ApiService();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    NewestModule,
    CommentsModule,
    ShowModule,
    AskModule,
    JobsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
