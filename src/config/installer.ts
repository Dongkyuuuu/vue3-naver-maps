/**
 * vue3-naver-maps installer
 */
export function installer(options: install.options) {
  const isExist = document.getElementById("vue3-naver-maps");
  if (!isExist) {
    const URL = _createURL(options);

    new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.id = "vue3-naver-maps";
      script.setAttribute("src", URL);
      script.setAttribute("async", "");
      script.setAttribute("defer", "");
      script.onerror = () => {
        reject(new Error(`[vue3-naver-maps] Failed to load`));
      };
      document.head.appendChild(script);
    });
  }
}

/**
 * create Javscript naver-maps URL
 */
function _createURL(options: install.options) {
  const baseURL: string =
    "https://openapi.map.naver.com/openapi/v3/maps.js" + "?";
  const category: install.category = options.category
    ? options.category
    : "ncp";
  const clientID: string = "ClientId=" + options.clientID;
  const subModules: string = options.subModules
    ? "&submodules=" + options.subModules
    : "";

  return baseURL + category + clientID + subModules;
}
