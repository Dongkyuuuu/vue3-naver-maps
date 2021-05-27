declare namespace NodeJS {
  interface Process {
    browser: boolean;
  }
}

declare interface Window {
  $naverMapsCallBack: [];
  $naverMapsLoaded: boolean;
}
