declare global {
  interface Window {
    ReactNativeWebview: {
      postMessage: (message: string) => void;
    };
  }
}
export {};
