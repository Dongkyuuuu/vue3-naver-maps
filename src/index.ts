import { App } from "vue";

const BROWSER_ERROR_MSG =
  "Sorry, this plugin is only available in browsers at now. If you are using Nuxt.js, turn off ssr for this plugin.";
const CLIENTID_ERROR_MSG = "options must be included clientID";

function createURL(options: install.options) {
  const baseURL: string =
    "https://openapi.map.naver.com/openapi/v3/maps.js" + "?";
  const category: install.Category = options.category
    ? options.category
    : "ncp";
  const clientID: string = options.clientID;
  const subModules: string = options.subModules ? "&" + options.subModules : "";

  return baseURL + category + clientID + subModules;
}

function createScript(URL: string) {
  const script = document.createElement("script");
  script.id = "naver-map-load";
  script.setAttribute("src", URL);
  script.setAttribute("async", "");
  script.setAttribute("defer", "");
  document.head.appendChild(script);
}

function createComponents(app: App<Element>) {
  //   app.component("");
}

export default function install(app: App<Element>, options: install.options) {
  if (!process.browser) throw new Error(BROWSER_ERROR_MSG);
  if (!options.clientID) throw new Error(CLIENTID_ERROR_MSG);

  window.$naverMapsCallBack = [];
  window.$naverMapsLoaded = false;

  const naver_map_url = createURL(options);
  createScript(naver_map_url);
  createComponents(app);
}
