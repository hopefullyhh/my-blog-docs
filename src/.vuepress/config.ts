import { defineUserConfig } from "vuepress";
import { webpackBundler } from '@vuepress/bundler-webpack'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "文档演示",
  description: "vuepress-theme-hope 的文档演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,

 bundler: webpackBundler({
    chainWebpack: (config) => {
      config.module
        .rule('scss')
        .use('sass-loader')
        .tap(options => ({
          ...options,
          sassOptions: {
            quietDeps: true,
            silenceDeprecations: ['if-function']
          }
        }))
      return config
    }
  }),
});

