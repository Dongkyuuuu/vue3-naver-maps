import path from "path";
import alias from "@rollup/plugin-alias";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import vue from "@vitejs/plugin-vue";
import { terser } from "rollup-plugin-terser";

const pkg = require("./package.json");
const banner = `/*!
  * ${pkg.name} v${pkg.version}
  * (c) ${new Date().getFullYear()}. Dongkyuuuu All rights reserved.
  * @license MIT
  */`;

const outputConfigs = {
  cjs: {
    file: pkg.main,
    format: "cjs",
  },
  esm: {
    file: pkg.module,
    format: "es",
  },
};

const createConfigs = (format, output) => {
  output.sourcemap = !!process.env.SOURCE_MAP;
  output.exports = format === "cjs" ? "named" : "auto";
  output.globals = {
    vue: "Vue",
  };
  output.banner = banner;

  const pluginVue =
    format === "cjs" ? vue({ template: { optimizeSSR: true } }) : vue();

  return {
    input: "src/index.ts",
    external: ["vue"],
    plugins: [
      alias({
        entries: [{ find: "@", replacement: path.resolve(__dirname, "src/") }],
      }),
      nodeResolve({
        extensions: [".ts", ".tsx", ".js", ".json", ".vue"],
        modules: [path.resolve(__dirname, "./"), "node_modules"],
      }),
      typescript({
        tsconfig: path.resolve(__dirname, "tsconfig.json"),
        tsconfigOverride: {
          compilerOptions: {
            sourceMap: false,
            declaration: true,
            declarationMap: true,
          },
        },
        exclude: [".yarn", "__tests__"],
      }),
      pluginVue,
      terser(),
    ],
    output,
  };
};

export default Object.keys(outputConfigs).map((format) =>
  createConfigs(format, outputConfigs[format])
);
