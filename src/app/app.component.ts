import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sendMessage() {
    // Send a message to the React app
    window.parent.postMessage({ type: 'SUCCESS' });
  }
}
