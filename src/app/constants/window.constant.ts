import { InjectionToken } from '@angular/core';

declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage: (message: string) => void;
    };
  }
}

export const WINDOW = new InjectionToken<Window>('Global window object', {
  factory: () => window,
});
