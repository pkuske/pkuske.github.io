import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  PostMessageService,
  POST_MESSAGE_SERVICE_TOKEN,
} from './post-message.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: POST_MESSAGE_SERVICE_TOKEN,
      useClass: PostMessageService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
