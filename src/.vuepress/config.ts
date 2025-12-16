import { defineUserConfig } from "vuepress";
import { webpackBundler } from '@vuepress/bundler-webpack'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/my-blog-docs/",

  lang: "zh-CN",
  title: "林海听风语",
  description: "林海听风语的个人博客",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "林海听风语",
      description: "林海听风语的个人博客",
    }
  },

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

