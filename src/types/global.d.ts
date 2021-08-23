declare namespace NodeJS {
  interface Process {
    browser: boolean;
  }
}
declare interface Window {
  $naverMapsCallback: [];
  $naverMapsLoaded: boolean;
  $naverMapsObject: naver.maps.Map;
}
