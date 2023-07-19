import { Component } from '@angular/core';

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
