import { App } from "vue";
import { installer, createComponents } from "./config";

const ERROR_MSG_BROWSER =
  "Sorry, this plugin is only available in browsers at now. If you are using Nuxt.js, turn off ssr for this plugin.";
const ERROR_MSG_CLIENT = "options must be included clientID";

export default function install(app: App<Element>, options: install.options) {
  if (!process.browser) throw new Error(ERROR_MSG_BROWSER);
  if (!options.clientID) throw new Error(ERROR_MSG_CLIENT);

  installer(options);
  createComponents(app);
}
