import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/test-homepage",

  locales: {
    "/": {
      lang: "en-US",
      title: "BitSail",
      description: "BitSail",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "BitSail",
      description: "BitSail",
    },
  },

  theme,

  shouldPrefetch: false,
});
