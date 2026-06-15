import { md3 } from "vuetify/blueprints";
import { defineOrganization } from "nuxt-schema-org/schema";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-12-21",
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/favicon-192x192.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "512x512",
          href: "/favicon-512x512.png",
        },
      ],
    },
  },

  // ssr: false,
  modules: [
    "@nuxt/fonts",
    "vuetify-nuxt-module",
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
  ],

  ogImage: {
    enabled: false,
  },

  schemaOrg: {
    identity: defineOrganization({
      name: "Internet eXchange 42",
      image: "/ix42.png",
      description: "Overlay eXchange connecting dn42 networks.",
      url: "ix42.org",
      sameAs: ["https://t.me/ixp42", "https://github.com/ixp42"],
    }),
  },

  site: {
    url: "https://ix42.org",
    name: "Internet eXchange 42",
    description: "Overlay eXchange connecting dn42 networks.",
    defaultLocale: "en",
  },

  vuetify: {
    moduleOptions: {
      styles: { configFile: "assets/styles/settings.scss" },

      ssrClientHints: {
        reloadOnFirstRequest: false,
        viewportSize: true,
        //prefersColorScheme: false,
        //prefersReducedMotion: true,

        prefersColorSchemeOptions: {
          useBrowserThemeOnly: false,
        },
      },
    },
    vuetifyOptions: {
      blueprint: md3,
      theme: {
        // default 'system' requires `ssr: false` to avoid hydration warnings
        defaultTheme: "light",

        themes: {
          light: {},
          dark: {},
        },
      },
    },
  },

  eslint: {
    config: {
      import: {
        package: "eslint-plugin-import-lite",
      },
    },
  },

  i18n: {
    strategy: "no_prefix",
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "lang",
    },
    compilation: {
      strictMessage: false,
    },
    locales: [
      { code: "en", name: "English" },
      { code: "zh", name: "简体中文" },
    ],
  },
});
