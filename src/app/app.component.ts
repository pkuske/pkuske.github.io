import { Component, Inject } from '@angular/core';
import { PostMessageService } from './post-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private postMessageService: PostMessageService) {}

  sendMessage() {
    // Send a message to the React app
    const messageData = { type: 'SUCCESS' };
    this.postMessageService.postMessage(messageData);
  }
}
