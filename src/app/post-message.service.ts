import { Injectable, InjectionToken } from '@angular/core';

export const POST_MESSAGE_SERVICE_TOKEN =
  new InjectionToken<PostMessageService>('PostMessageService');

declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage: (message: string) => void;
    };
  }
}

@Injectable({
  providedIn: 'root',
})
export class PostMessageService {
  postMessage(data: any) {
    if (
      'ReactNativeWebView' in window &&
      typeof window.ReactNativeWebView.postMessage === 'function'
    ) {
      window.ReactNativeWebView.postMessage(JSON.stringify(data));
    }
  }
}
