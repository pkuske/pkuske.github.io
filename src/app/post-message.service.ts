import { Injectable, InjectionToken } from '@angular/core';

export const POST_MESSAGE_SERVICE_TOKEN =
  new InjectionToken<PostMessageService>('PostMessageService');

@Injectable({
  providedIn: 'root',
})
export class PostMessageService {
  postMessage(postMessage: any) {
    if ('parent' in window && typeof parent.postMessage === 'function') {
      console.log('Message data being sent:', postMessage);
      window.parent.postMessage(JSON.stringify(postMessage));
    }
  }
}
