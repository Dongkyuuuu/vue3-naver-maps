declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare namespace NodeJS {
  interface Process {
    browser: boolean;
  }
}
declare interface Window {
  $naverMapsCallBack: [];
  $naverMapsLoaded: boolean;
}
