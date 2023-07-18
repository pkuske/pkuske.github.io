import { Component } from '@angular/core';
import { PostMessageService } from './post-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'postmessage-test';
  showDiv = false;

  constructor(private postMessageService: PostMessageService) {}

  testPostMessage() {
    const messageData = {
      type: 'MESSAGE_TYPE',
      payload: 'Hello from Angular!',
    };
    window.parent.postMessage(JSON.stringify(messageData));
    // const postMessageData = { type: 'SUCCESS' };
    // this.postMessageService.postMessage(postMessageData);
    // // console.log('postMessage send');
    // // window.parent.postMessage(JSON.stringify({ type: 'SUCCESS' }));
    // this.showDiv = !this.showDiv;
  }
}
