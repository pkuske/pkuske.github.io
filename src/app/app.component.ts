import { Component } from '@angular/core';

declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage: (message: string) => void;
    };
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sendMessage() {
    // Send a message to the React app
    if (
      'ReactNativeWebView' in window &&
      typeof window.ReactNativeWebView.postMessage === 'function'
    ) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: 'SUCCESS' })
      );
    }
  }
}
