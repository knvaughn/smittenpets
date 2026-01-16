// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxt/image", "@nuxtjs/google-fonts"],

  devtools: {
    enabled: true,
  },

  ui: {
    colorMode: false,
  },

  googleFonts: {
    families: {
      Fredoka: {
        wght: [300, 400, 600, 700],
      },
      "Dancing Script": {
        wght: [400, 500, 600, 700],
      },
    },
  },

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
