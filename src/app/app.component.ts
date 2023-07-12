import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'postmessage-test';

  testPostMessage() {
    console.log("postMessage send");
    window.parent.postMessage('SUCCESS', '*');
  }
}
