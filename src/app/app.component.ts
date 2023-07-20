import { Component, Inject } from '@angular/core';
import {
  PostMessageService,
  POST_MESSAGE_SERVICE_TOKEN,
} from './post-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    @Inject(POST_MESSAGE_SERVICE_TOKEN)
    private postMessageService: PostMessageService
  ) {}

  sendMessage() {
    // Send a message to the React app
    const messageData = { type: 'SUCCESS' };
    this.postMessageService.postMessage(messageData);
  }
}
