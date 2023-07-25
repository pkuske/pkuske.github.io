import { Injectable, Inject } from '@angular/core';
import { PostMessageData } from './post-message-data.interface';
import { WINDOW } from './constants';

@Injectable({
  providedIn: 'root',
})
export class PostMessageService {
  constructor(@Inject(WINDOW) private window: Window) {}
  postMessage(data: PostMessageData = { type: 'SCCESS' }) {
    if (
      'ReactNativeWebView' in this.window &&
      typeof this.window.ReactNativeWebView.postMessage === 'function'
    ) {
      this.window.ReactNativeWebView.postMessage(JSON.stringify(data));
    }
  }
}
